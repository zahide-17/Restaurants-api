/*  Simulando la respuesta de objetos Restaurant en un futuro aquí se utilizarán los modelos
 */

const Restaurant = require('../models/Restaurant')

function createRestaurant(req, res) {
    // Instanciaremos un nuevo usuario utilizando la clase usuario
    var restaurant = new Restaurant(req.body)
    res.status(201).send(restaurant)
  }
  
