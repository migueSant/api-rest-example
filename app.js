'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var port = 3700;
var app = express();

// start the server
app.listen(port, function() {
  console.log('app started');
});

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//router
var project_routes = require('./routes/project');
app.use('/api', project_routes);

//CORS

//exportar
module.exports = app;
