const fs = require('fs').promises;
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

function getClasses() {
    return config["labels"]
}

module.exports.getSongNames = getSongNames;
module.exports.getModelAnnotations = getModelAnnotations;
module.exports.getClasses = getClasses;
