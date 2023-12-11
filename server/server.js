import mongoose from "mongoose";
import express from "express";
import "dotenv/config"
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import cors from "cors";

// Create an Express app
const app = express();


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

