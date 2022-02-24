var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars').create();
var path = require('path');
var controller = require('./controller');

var app = express();

//set up static folder
app.use(express.static(__dirname + '/public'));

//set body-parser to read post request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set up dispatcher
controller.dispatcher(app);

app.set('views', __dirname + '/views');

//set up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//start server
app.listen(app.get('port'), '127.0.0.1', function () {
  console.log('Instrumentalness Player started on http://127.0.0.1:' +
      app.get('port') + '; press Ctrl-C to terminate.');
});

module.exports = app;
