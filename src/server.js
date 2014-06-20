var express = require('express');
var aphorism = require('./aphorism');
var React = require('react');
var IndexView = require('../template/IndexView');

var port = 3000;

var app = express();

app.get('/', function(req, res){
  var props = {
    aphorism: aphorism.getRandom()
  };
  var html = React.renderComponentToString(IndexView(props))
  res.send(html);
});

app.listen(port, function () {
  console.log("Http server open for business on port " + port)
});
