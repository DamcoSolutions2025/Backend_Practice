const mongoose = require('mongoose');
const connectDB = require('./src/db/index.js');

// Connecting to database
// const dbUrl = "mongodb+srv://Ayush:mahadev@cluster0.xkerboy.mongodb.net/"; 

mongoose.set('strictQuery', false);

connectDB();
// Handle connection events
const db = mongoose.connection;
db.on('error', (err) => console.error('MongoDB connection error:', err));
db.once('open', () => console.log("Mongoose is running successfully"));

