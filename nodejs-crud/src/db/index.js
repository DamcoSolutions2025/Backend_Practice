const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
// const StudentModel = require('./src/schema/studentSchema.js');

// Connecting to database
const dbUrl = "mongodb+srv://Ayush:mahadev@cluster0.xkerboy.mongodb.net/"; 

mongoose.set('strictQuery', false);

const connectDB = async () => {
    console.log(dbUrl)
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process on failure
    }
}

// Call the function to connect
module.exports = connectDB;
