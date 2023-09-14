var GLOBAL_ACTIONS = { // eslint-disable-line
    play: function (index) {
        window.wavesurfer[index].playPause();
    },

    back: function (index) {
        window.wavesurfer[index].skipBackward();
    },

    forth: function (index) {
        window.wavesurfer[index].skipForward();
    },

    'toggle-mute': function (index) {
        window.wavesurfer[index].toggleMute();
    }
};

// Bind actions to buttons and keypresses
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (e) {
        let map = {
            32: 'play', // space
            37: 'back', // left
            39: 'forth' // right
        };
        let action = map[e.keyCode];
        if (action in GLOBAL_ACTIONS) {
            if (document == e.target || document.body == e.target || e.target.attributes["data-action"]) {
                e.preventDefault();
            }
            for (var i = 0; i < window.wavesurfer.length; i++) {
                GLOBAL_ACTIONS[action](i);
                if (i != 0) {
                    GLOBAL_ACTIONS["toggle-mute"](i);
                }
            }
        }
    });

    [].forEach.call(document.querySelectorAll('[data-action]'), function (el) {
        el.addEventListener('click', function (e) {
            var id = el.getElementsByClassName("span-to-get-id")[0].id;
            let action = e.currentTarget.dataset.action;
            if (action in GLOBAL_ACTIONS) {
                e.preventDefault();
                GLOBAL_ACTIONS[action](id.split('-')[1]);
            }
        });
    });
});