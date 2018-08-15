'use strict'

var express = require('express');
var projectController = require('../controllers/project');

var router = express.Router();

router.get('/home', projectController.home);
router.post('/test', projectController.test);
router.post('/new', projectController.nuevoRegistro);
router.get('/buscar/:id?', projectController.buscarRegistro);
router.put('/update/:id', projectController.actualuzarRegistro);
router.delete('/borrar/:id', projectController.eliminarRegistro);
router.get('/todos', projectController.todos);
module.exports = router;
