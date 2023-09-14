const fs = require('fs').promises;
const fs_sync = require('fs')
const path = require('path');
const config = require('./config.json');

async function getModelAnnotations(songname, callback) {
    var annotation_models_res = [];
    fs.readdir(config["annotation_dir"])
        .then(dirs => {
            dirs.forEach((item, index, array) => {
                var model_file_json = path.join(config["annotation_dir"], item, songname + '.json');
                fs.access(model_file_json)
                    .then(_ => {
                        annotation_models_res.push({
                            "songname": songname,
                            "model_name": dirs[index],
                            "annotation_file": model_file_json
                        });
                        if (index == array.length - 1) {
                            callback(annotation_models_res);
                            return;
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        callback(annotation_models_res);
                        return;
                    })

            });
        })
        .catch(err => {
            console.log("An error occurred", err);
        })
}

function getSongNames() {
    if ("song_names" in config) {
        return config["song_names"];
    }
    let song_names = [];
    fs.readdir(config["audio_dir"])
        .then(files => {
            files.forEach((item, index, array) => {
                var extension = item.split('.').pop();
                if (["mp3", "ogg", "wav"].includes(extension)) {
                    song_names.push(item.slice(0, -4));
                }
            })
        })
        .catch(err => {
            console.log("An error occurred", err);
        })
    return song_names
}

function extractLabelsFromJsonFiles(folderPath) {
    const labels = new Set();
    fs_sync.readdirSync(folderPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .forEach(dirent => {
            const subFolderPath = path.join(folderPath, dirent.name);
            fs_sync.readdirSync(subFolderPath, { withFileTypes: true })
                .filter(dirent => dirent.isFile() && dirent.name.endsWith('.json'))
                .forEach(dirent => {
                    const filePath = path.join(subFolderPath, dirent.name);
                    const fileContent = fs_sync.readFileSync(filePath, 'utf8');
                    const jsonContent = JSON.parse(fileContent);
                    jsonContent.forEach(item => {
                        if (item.data && item.data.label) {
                            labels.add(item.data.label);
                        }
                    });
                });
        });
    return [...labels];
}

function getClasses() {
    let labels
    if ("lbels" in config) {
        labels = config["labels"]
    } else {
        labels = extractLabelsFromJsonFiles(config["annotation_dir"])
    }
    return labels
}

module.exports.getSongNames = getSongNames;
module.exports.getModelAnnotations = getModelAnnotations;
module.exports.getClasses = getClasses;
