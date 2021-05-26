/*  Simulando la respuesta de objetos Restaurant en un futuro aquí se utilizarán los modelos
 */

const mongoose = require("mongoose")
const Restaurant = mongoose.model("Restaurant")
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

function createRestaurant(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var restaurant = new Restaurant(req.body)
  res.status(201).send(restaurant)
}

function obtainRestaurant(req,res){
  var restaurant 
  fs.createReadStream('restaurantes.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () =>{
      restaurant = new Restaurant(results)
      console.log(results)
      res.send(results)
    });
 
}

function modifyRestaurant(req, res, next) {
  var restaurant = new Restaurant(req.params.id)
  var modify = req.body
  restaurant = { ...restaurant, ...modify }
  res.send(restaurant)
}

function deleteRestaurant(req, res) {
  res.status(200).send(`Restaurante ${req.params.id} eliminado`);
}

module.exports = {
  createRestaurant,
  obtainRestaurant,
  modifyRestaurant,
  deleteRestaurant
} 
