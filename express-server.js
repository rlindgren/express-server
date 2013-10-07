var fs = require('fs')
  , express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , pkg = JSON.parse(fs.readFileSync('./package.json'));

var config = require('./express-config')
  , routes = require('./express-routes');

// bootstrap the app
config(express, app); // load express server config & middleware
routes(app); // load app routes

// start listening on designated port
var port = process.env.PORT || 8000;
server.listen(port);
console.log('\n' + pkg.name + ' listening on port ' + port + '\n');

// expose app
module.exports = app;
