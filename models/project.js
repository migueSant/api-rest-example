'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
  name: String,
  description :String,
  category: String,
  langs: String,
  year: Number,
  cohort: Number
});

module.exports = mongoose.model('Project', ProjectSchema);
//projects --> guardar los documentos en la coleccion

//MVC
//1. El usuario realiza una peticion
//2. Ek controlador captura la peticion
//3. Hace la llamada al modelo correspondiente
//4. El modelo sera el encargado de interactuar con la BD
//5. El controlador  recibe la informacion y la envia a la vista
//6. La vista muestra la informacion
