const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    Name: String,
    Email: String,
});

module.exports = mongoose.model(
    'DummyData', StudentSchema);
    