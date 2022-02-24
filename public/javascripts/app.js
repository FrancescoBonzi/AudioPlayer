/**
 * Create a WaveSurfer instance.
 */
var wavesurfer = []; // eslint-disable-line no-var
     
function loadAudioPlayer(index, songname, modelname, annotationpath) {

    /**
     * Init & load.
     */
        // Init wavesurfer
        wavesurfer[index] = WaveSurfer.create({
            container: '#waveform-' + index,
            height: 200,
            pixelRatio: 1,
            scrollParent: true,
            hideScrollbar: true,
            normalize: true,
            minimap: true,
            backend: 'MediaElement',
            plugins: [
                WaveSurfer.regions.create(),
                WaveSurfer.minimap.create({
                    height: 30,
                    waveColor: '#ddd',
                    progressColor: '#999',
                    cursorColor: '#999'
                }),
                WaveSurfer.timeline.create({
                    container: '#wave-timeline-' + index
                })
            ]
        });
        
        wavesurfer[index].load("/getAudio?songname=" + songname);

        /* Regions */
        wavesurfer[index].on('ready', function() {
            fetch("/getAnnotation?songname=" + annotationpath)
                .then(r => r.json())
                .then(data => {
                    loadRegions(index, data);
                });
        });
        wavesurfer[index].on('region-click', function(region, e) {
            console.log(region, e);
            e.stopPropagation();
            // Play on click, loop on shift click
            e.shiftKey ? region.playLoop() : region.play();
        });
        wavesurfer[index].on('region-in', region => showNote(index, region));
        wavesurfer[index].on('region-play', function(region) {
            region.once('out', function() {
                wavesurfer[index].play(region.start);
                wavesurfer[index].pause(index);
            });
        });

        /* Toggle play/pause buttons. */
        let playButton = document.querySelector('#play-' + index);
        let pauseButton = document.querySelector('#pause-' + index);
        wavesurfer[index].on('play', function() {
            playButton.style.display = 'none';
            pauseButton.style.display = '';
        });
        wavesurfer[index].on('pause', function() {
            playButton.style.display = '';
            pauseButton.style.display = 'none';
        });
}

/**
 * Load regions from localStorage.
 */
function loadRegions(index, regions) {
    regions.forEach(function(region) {
        console.log(region)
        if(region.data.label == 'vocals') {
            region.color = 'rgba(177, 215, 172, 0.5)'
            region.data.label = 'VOCALS'
        } else if(region.data.label == 'instrumental') {
            region.color = 'rgba(167, 51, 63, 0.5)'
            region.data.label = 'INSTRUMENTAL'
        } else { 
            region.color = 'rgba(0, 0, 60, 0.1)'
        }
        region.drag = false;
        region.resize = false;
        wavesurfer[index].addRegion(region);
    });
}

/**
 * Extract regions separated by silence.
 */
function extractRegions(peaks, duration) {
    // Silence params
    const minValue = 0.0015;
    const minSeconds = 0.25;

    let length = peaks.length;
    let coef = duration / length;
    let minLen = minSeconds / coef;

    // Gather silence indeces
    let silences = [];
    Array.prototype.forEach.call(peaks, function(val, index) {
        if (Math.abs(val) <= minValue) {
            silences.push(index);
        }
    });

    // Cluster silence values
    let clusters = [];
    silences.forEach(function(val, index) {
        if (clusters.length && val == silences[index - 1] + 1) {
            clusters[clusters.length - 1].push(val);
        } else {
            clusters.push([val]);
        }
    });

    // Filter silence clusters by minimum length
    let fClusters = clusters.filter(function(cluster) {
        return cluster.length >= minLen;
    });

    // Create regions on the edges of silences
    let regions = fClusters.map(function(cluster, index) {
        let next = fClusters[index + 1];
        return {
            start: cluster[cluster.length - 1],
            end: next ? next[0] : length - 1
        };
    });

    // Add an initial region if the audio doesn't start with silence
    let firstCluster = fClusters[0];
    if (firstCluster && firstCluster[0] != 0) {
        regions.unshift({
            start: 0,
            end: firstCluster[firstCluster.length - 1]
        });
    }

    // Filter regions by minimum length
    let fRegions = regions.filter(function(reg) {
        return reg.end - reg.start >= minLen;
    });

    // Return time-based regions
    return fRegions.map(function(reg) {
        return {
            start: Math.round(reg.start * coef * 10) / 10,
            end: Math.round(reg.end * coef * 10) / 10
        };
    });
}

/**
 * Edit annotation for a region.
 */
function editAnnotation(region) {
    let form = document.forms.edit;
    form.style.opacity = 1;
    (form.elements.start.value = Math.round(region.start * 10) / 10),
    (form.elements.end.value = Math.round(region.end * 10) / 10);
    form.elements.note.value = region.data.note || '';
    form.onsubmit = function(e) {
        e.preventDefault();
        region.update({
            start: form.elements.start.value,
            end: form.elements.end.value,
            data: {
                note: form.elements.note.value
            }
        });
        form.style.opacity = 0;
    };
    form.onreset = function() {
        form.style.opacity = 0;
        form.dataset.region = null;
    };
    form.dataset.region = region.id;
}

/**
 * Display annotation.
 */
function showNote(index, region) {
    console.log("Show note: " + index);
    if (!showNote.el) {
        showNote.el = document.querySelector('#subtitle-' + index);
    }
    showNote.el = document.querySelector('#subtitle-' + index);
    showNote.el.textContent = region.data.label || '-';
}

/***
 * Sync
 */
function sync(index) {
    var current_position = wavesurfer[index].getCurrentTime();
    for(var i=0;i<wavesurfer.length;i++) {
        if(i != index) {
            wavesurfer[i].setCurrentTime(current_position);
        }
    }
}