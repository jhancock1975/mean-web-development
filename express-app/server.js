var express = require('express');
var app = express();

app.use('/', function(req, res) {
  var obj={hot:'rats'};

  res.send(obj);
  console.log('sent hello world');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;
