process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express');
    passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();
var portNum = 3001;
app.listen(portNum);

module.exports = app;

console.log('Server running at http://localhost:' + portNum +'/');
