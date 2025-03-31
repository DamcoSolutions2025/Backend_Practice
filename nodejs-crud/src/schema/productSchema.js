const mongoose = require('mongoose');

const prodcutSchema = new mongoose.Schema({
    Name: {
        type:String,
        required:[true,"PRODUCT NAME IS MANDATORY"]
    },
    Manufacturer: String,
    Price: Number,
    Quantity: Number,
});
module.exports = mongoose.model(
    'product', prodcutSchema);