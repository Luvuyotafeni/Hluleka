// models/cart.js
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    title: String,
    quantity: String,
    price: String,
});

const cartSchema = new mongoose.Schema({
    name: String,
    surname: String,
    gender: String,
    id: String,
    date: String,
    cartItems: [cartItemSchema],
});

module.exports = mongoose.model("Cart", cartSchema);
