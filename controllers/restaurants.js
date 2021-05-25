/*  Simulando la respuesta de objetos Restaurant en un futuro aquí se utilizarán los modelos
 */

const Restaurant = require('../models/Restaurant')
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

function createRestaurant(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var restaurant = new Restaurant(req.body)
  res.status(201).send(restaurant)
}

function obtainRestaurant(req, res) {
    // Simulando dos usuarios y respondiendolos
    fs.createReadStream('restaurantes.csv')
        .pipe(csv({
            separator: ',',
            newline: '\n',
            
        }))
        .on('data', (data) => results.push(data))
        .on('end', () =>{
            
            res.send([results])
        });  
}

function modifyRestaurant(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var restaurant1 = new Restaurant(req.params.id, 'Juan', 'Vega', 'juan@vega.com')
  var modify = req.body
  restaurant1 = { ...restaurant1, ...modify }
  res.send(restaurant1)
}

function removeRestaurant(req, res) {
  res.status(200).send(`Restaurante ${req.params.id} eliminado`);
}

module.exports = {
  createRestaurant,
  obtainRestaurant,
  modifyRestaurant,
  removeRestaurant
} 
