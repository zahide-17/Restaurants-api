var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

//Global object of the app
var app = express();

//Middlewares configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mongoose Configuration
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://zadd:91MwDidJNYYPiNkN@cluster0-xmea4.mongodb.net/RestauranteDEV?retryWrites=true&w=majority"
);

mongoose.set("debug", true);

require("./models/Restaurant");

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

//Handling 404 errors
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Starting the server ...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});