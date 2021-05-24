class Restaurant {
    constructor(id, rating, name, site, email, phone, street, city, state, latitude, longitude) {
        this.id = id;
        this.rating = rating;
        this.name = name;
        this.site = site;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.city = city;
        this.state = state;
        this.latitude = latitude;
        this.longitude = longitude;

    }
}

module.exports = Restaurant;
