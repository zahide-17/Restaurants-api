/*  Simulando la respuesta de objetos Restaurant en un futuro aquí se utilizarán los modelos
 */

const mongoose = require("mongoose")
const Restaurant = mongoose.model("Restaurant")

function createRestaurant(req, res, next) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
    var restaurant = new Restaurant(req.body)
    restaurant.id = req.restaurant.id
    restaurant.estado = 'disponible'
    restaurant.save().then(restaurant => {                                         //Guardando nuevo usuario en MongoDB.
    return res.status(201).send(restaurant)
  }).catch(next)
}

function obtainRestaurant(req,res,next){
    if(req.params.id){
        Restaurant.findById(req.params.id)
                .populate().then(restaurant => {
              res.send(restaurant)
            }).catch(next)
      } else {
        Restaurant.find().then(restaurant=>{
          res.send(restaurant)
        }).catch(next)
      }
}

function modifyRestaurant(req, res, next) {
  console.log(req.restaurant)
  Restaurant.findById(req.restaurant.id).then(rest => {
    if (!rest) { return res.sendStatus(401); }
    let nuevaInfo = req.body
    if (typeof nuevaInfo.name !== 'undefined')
      rest.name = nuevaInfo.name
    if (typeof nuevaInfo.bio !== 'undefined')
      rest.bio = nuevaInfo.bio
    if (typeof nuevaInfo.foto !== 'undefined')
      rest.foto = nuevaInfo.foto
    if (typeof nuevaInfo.ubicacion !== 'undefined')
      rest.ubicacion = nuevaInfo.ubicacion
    if (typeof nuevaInfo.telefono !== 'undefined')
      rest.telefono = nuevaInfo.telefono
   
    rest.save().then(updatedRest => {                                   //Guardando usuario modificado en MongoDB.
      res.status(201).json(updatedRest.publicData())
    }).catch(next)
  }).catch(next)
}

function deleteRestaurant(req, res) {
  // únicamente borra a su propio usuario obteniendo el id del token
   Restaurant.findOneAndDelete({ _id: req.restaurant.id }).then(r => {         //Buscando y eliminando usuario en MongoDB.
    res.status(200).send(`Restaurante ${req.params.id} eliminado: ${r}`);
  })
}

module.exports = {
  createRestaurant,
  obtainRestaurant,
  modifyRestaurant,
  deleteRestaurant
} 
