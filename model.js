var fs = require('fs').promises;
var path = require('path');

test_songs = [
    "03 - Say me Good Bye",
    "03 - School",
    "03 - Si Dieu",
    "03 - Une charogne",
    "03 - castaway",
    "04 - Believe",
    "04 - Healing Luna",
    "04 - Inside",
    "04 - You are",
    "05 - 05 LIrlandaise",
    "05 - 16 ans",
    "05 - 2003-Circonstances attenuantes part II",
    "05 - A Poings Fermes",
    "05 - Crepuscule",
    "05 - Dance",
    "05 - Elles disent"
];

async function getModelAnnotations(songname, callback) {
    var annotation_models_res = [];
    var root_instrumentalness = '/Users/francesco.bonzi/Documents/musixmatch-ai-audio/instrumentalness/';
    fs.readdir(root_instrumentalness)
        .then(dirs => {
            dirs.forEach((item, index, array) => {
                var model_dir = path.join(root_instrumentalness, item, 'annotations', songname + '.json');
                fs.access(model_dir)
                    .then(result => {
                        console.log("OK" + model_dir);
                        annotation_models_res.push({
                            "songname": songname,
                            "model_name": dirs[index],
                            "annotation_file": model_dir
                        });
                        if (index == array.length-1) {
                            callback(annotation_models_res);
                            return;
                        }
                    })
                    .catch(err => {
                        if (index == array.length-1) {
                            callback(annotation_models_res);
                            return;
                        }
                    })
                });
            })
        .catch(err => {
            console.log("An error occurred", err);
        })
}

function getSongNames() {
    return test_songs;
}

module.exports.getSongNames = getSongNames;
module.exports.getModelAnnotations = getModelAnnotations;
