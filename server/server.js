import mongoose from "mongoose";
import express from "express";
import "dotenv/config"


// Create an Express app
const app = express();


// Connect to MongoDB
mongoose.connect("mongodb+srv://root:root@socialmediacluster.0txf60c.mongodb.net/Dasocialmedia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

