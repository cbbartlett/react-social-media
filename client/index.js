import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import mongoose from "mongoose";
import cors from "cors";

const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    password: String!
  }
  
  type Mutation {
    createUser(username: String!, password: String!): User!
    loginUser(username: String!, password: String!): User!
  }
  
  type Query {
    hello: String
  }
`);

// MongoDB connection
mongoose.connect("mongodb+srv://root:root@socialmediacluster.0txf60c.mongodb.net/Dasocialmedia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const User = mongoose.model("User", {
  username: String,
  password: String,
});

const root = {
  hello: () => {
    return "Hello world!";
  },
  createUser: async (args) => {
    try {
      const { username, password } = args;

      // Create a new user object
      const newUser = new User({
        username: username,
        password: password,
      });

      // Save the user data to the database
      const savedUser = await newUser.save();

      // Return the saved user object
      return savedUser;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  },
  loginUser: async (args) => {
    try {
      const { username, password } = args;

      // Find the user in the database by username and password
      const user = await User.findOne({ username, password });

      // If the user doesn't exist or the password is incorrect, throw an error
      if (!user) {
        throw new Error("Invalid username or password");
      }

      // Return the user object
      return user;
    } catch (error) {
      throw new Error("Failed to login");
    }
  },
};

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});

