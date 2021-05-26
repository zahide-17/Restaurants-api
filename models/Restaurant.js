const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    id:     { type: String }, 
    rating: { type: Number },
    name:   { type: String },
    site:   { type: String },   
    email:  { type: String },   
    phone:  { type: String },   
    street: { type: String },   
    city:   { type: String },    
    state:  { type: String },   
    lat:    { type: Number }, 
    long:   { type: Number }, 
    
},{timestamps: true});

RestaurantSchema.methods.publicData = function(){
    return {
      id: this.id,
      rating: this.rating,
      name: this.name,
      site: this.side,
      email: this.email,
      phone: this.phone,
      street: this.street,
      city: this.city,
      state: this.state,
      latitude: this.latitude,
      longitude: this.longitude,
    };
  };
  mongoose.model("Restaurant", RestaurantSchema); 
