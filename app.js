var express = require('express');
var path = require('path');
var http = require('http');
var db = require('./model/dbconnect');
var config = require('./config');
var bodyParser = require('body-parser');
var app = express();


app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var route = require('./route')(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });