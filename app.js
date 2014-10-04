var express = require('express')
  , hbs = require('hbs'),
  bodyParser = require('body-parser')
  errorHandler = require('errorhandler');

var app = module.exports = express();

// Express Configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//handlebars helpers
hbs.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

//error handlers
//app.configure('development', function(){
//  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
//});

app.use(errorHandler());


// Routes
require('./actions')(app);
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);
