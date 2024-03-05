// models/cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name: String,
    surname: String,
    gender: String,
    id: String,
    date: String,
    cartItems: [
        {
            title: String,
            quantity: String,
            price: String,
        }
    ],
});

module.exports = mongoose.model("Cart", cartSchema);
