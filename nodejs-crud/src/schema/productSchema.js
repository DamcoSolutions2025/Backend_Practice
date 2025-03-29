const mongoose = require('mongoose');

const prodcutSchema = new mongoose.Schema({
    Name: String,
    Manufacturer: String,
    Price: Number,
    Quantity: Number,
});
module.exports = mongoose.model(
    'product', prodcutSchema);