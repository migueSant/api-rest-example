'use strict'

var Registro = require('../models/project');

var controller = {
  home: function(req, res){
    return res.status(200).send({
      message: "Soy la pagina de inicio"
    });
  },
  test: function(req, res){
    console.log(req.query.escuela);
    return res.status(200).send({
      message: "Soy el metodo o accion test del controlador",
      resp:1,
      escuela: req.query.escuela
    });
  },
  nuevoRegistro: function(req, res){
    var params = req.body;
    var documento = new Registro();
    documento.name = params.name;
    documento.description = params.description;
    documento.category = params.category;
    documento.langs = params.langs;
    documento.year = params.year;
    documento.cohort = params.cohort;

    documento.save((error, projectStored)=>{
      if(error){
        return res.status(500).send({
          message: "Error al guardar documento error 11"
        });
      }
      if(!projectStored){
          return res.status(404).send({
            message:"No se pudo guardar el documento errir 12"
          })
      }

      return res.status(200).send({
        documento:projectStored
      });

    });
  },
  buscarRegistro: function(req, res){
    var idBuscar = req.params.id;

    if(idBuscar == null)
    {
      return res.status(404).send({
        message:"El proyecto no existe, error 13"
      });
    }

      Registro.findById(idBuscar, (err, project) => {
      if(err){
        return res.status(500).send({
          message: "Error al devolver documento error 14"
        });
      }
      if(!project){
          return res.status(404).send({
            message:"El proyecto no existe error 15"
          });
      }

      return res.status(200).send({project});
    });

  },
  actualuzarRegistro: function(req, res){
    var idBuscar = req.params.id;
    var campos = req.body;

    Registro.findByIdAndUpdate(idBuscar, campos, (err, projectActualizado)=>{
      if(err){
        return res.status(500).send({
          message: "Error al actualizar error 16"
        });
      }
      if(!projectActualizado){
          return res.status(404).send({
            message:"El proyecto no existe error 17"
          });
      }

      return res.status(200).send({
        documentoActualizado: projectActualizado
      });


    })
  },
  eliminarRegistro: function(req, res){
    var documentoBuscar = req.params.id;

    Registro.findByIdAndRemove(documentoBuscar, (err, proyectoEliminado)=> {
      if(err){
        return res.status(500).send({
          message: "Error al eliminar error 18"
        });
      }
      if(!proyectoEliminado){
          return res.status(404).send({
            message:"El proyecto no se pudo eliminar error 19"
          });
      }

      return res.status(200).send({
        documentoEliminado: proyectoEliminado
      });

    });

  },
  todos: function(req, res){
    Registro.find({}).exec((err, todosProyectos)=>{
      if(err){
        return res.status(500).send({
          message: "Error al consultar todos los documentos error 20"
        });
      }
      if(!todosProyectos){
          return res.status(404).send({
            message:"No se encontraron los documentos 21"
          });
      }

      return res.status(200).send({
        todosProyectos
      });

    });
  }
};

module.exports = controller;
