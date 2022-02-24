var model = require('./model');
var path = require('path');
var fs = require('fs').promises;

exports.dispatcher = function (app) {
  app.get('/', function (req, res, next) {
    var songnames = model.getSongNames();
    res.render('home', { "songnames": songnames });
  });

  app.get('/player', function (req, res, next) {
    var songname = req.query.songname;
    model.getModelAnnotations(songname, annotations => {
      if(annotations.length != 0) {
        res.render('player', { "annotations": annotations });
      } else {
        console.log('No annotations available!');
        var songnames = model.getSongNames();
        res.render('home', { "songnames": songnames });
      }
    });
  });

  app.get('/getAudio', function (req, res, next) {
    var songname = req.query.songname;
    console.log("yeppa audio ", songname);
    const ROOT_DIR = '/Users/francesco.bonzi/Documents/datasets/jamendo/audio/';
    fs.readdir(ROOT_DIR)
      .then(files => {
        files.forEach(file => {
          if(file.startsWith(songname)) {
            var ext = file.split('.')[1];
            var path = ROOT_DIR + songname + '.' + ext;
            console.log(path);
            res.sendFile(path);
            return;
          }
        })
      })
  });

  app.get('/getAnnotation', function (req, res, next) {
    var annotationpath = req.query.songname;
    console.log("yeppa annotation ", annotationpath);
    res.sendFile(annotationpath);
  });
}
