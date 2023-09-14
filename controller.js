const model = require('./model');
const config = require('./config.json');
const fs = require('fs').promises;

exports.dispatcher = function (app) {
  app.get('/', function (req, res, next) {
    var songnames = model.getSongNames();
    res.render('home', { "app_name": config.app_name, "songnames": songnames });
  });

  app.get('/player', function (req, res, next) {
    var songname = req.query.songname;
    model.getModelAnnotations(songname, annotations => {
      if (annotations.length != 0) {
        res.render('player', { "app_name": config.app_name, "songname": songname, "annotations": annotations });
      } else {
        console.log('No annotations available!');
        var songnames = model.getSongNames();
        res.render('home', { "app_name": config.app_name, "songnames": songnames });
      }
    });
  });

  app.get('/getAudio', function (req, res, next) {
    var songname = req.query.songname;
    fs.readdir(config["audio_dir"])
      .then(files => {
        files.forEach(file => {
          if (file.startsWith(songname)) {
            var ext = file.split('.').pop();
            var path = config["audio_dir"] + songname + '.' + ext;
            console.log(path);
            res.sendFile(path);
            return;
          }
        })
      })
  });

  app.get('/getAnnotation', function (req, res, next) {
    var annotationpath = req.query.songname;
    res.sendFile(annotationpath);
  });

  app.get('/getClasses', function (req, res, next) {
    var classes = model.getClasses()
    res.send(JSON.stringify(classes));
  });
}
