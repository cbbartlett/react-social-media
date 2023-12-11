import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

const schema = buildSchema(`
type User {
  id: ID!
  username: String!
  password: String!
}

type Comment {
  _id: ID!
  commentText: String!
}

type Thought {
  _id: ID!
  thoughtText: String!
  comments: [Comment!]!
}

input CreateThoughtInput {
  thoughtText: String!
}


input CreateCommentInput {
  thoughtId: ID!
  commentText: String!
}

type Mutation {
  createUser(username: String!, password: String!): User!
  loginUser(username: String!, password: String!): User!
  createThought(input: CreateThoughtInput!): Thought
  updateThought(id: ID!, thoughtText: String!): Thought
  deleteThought(id: ID!): Thought
  createComment(input: CreateCommentInput!): Comment
}

type Query {
  thoughts: [Thought]
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
const Thought = mongoose.model("Thought", {
  thoughtText: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
const Comment = mongoose.model("Comment", {
  commentText: String,
});

const root = {
  hello: () => {
    return "Hello world!";
  },
  createUser: async (args) => {
    try {
      const { username, password } = args;

      const newUser = new User({
        username: username,
        password: password,
      });

      const savedUser = await newUser.save();

      return savedUser;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  },
  loginUser: async (args) => {
    try {
      const { username, password } = args;

      const user = await User.findOne({ username, password });

      if (!user) {
        throw new Error("Invalid username or password");
      }

      return user;
    } catch (error) {
      throw new Error("Failed to login");
    }
  },
  createThought: async (args) => {
    try {
      const { thoughtText } = args.input;

      const newThought = new Thought({
        thoughtText: thoughtText,
      });

      const savedThought = await newThought.save();

      return savedThought;
    } catch (error) {
      throw new Error("Failed to create thought");
    }
  },
  createComment: async (args) => {
    try {
      const { thoughtId, commentText } = args.input;

      const newComment = new Comment({
        commentText: commentText,
      });

      const savedComment = await newComment.save();

      // Find the thought and add the comment to its comments array
      const thought = await Thought.findById(thoughtId);
      thought.comments.push(savedComment);
      await thought.save();

      return savedComment;
    } catch (error) {
      throw new Error("Failed to create comment");
    }
  },
  thoughts: async () => {
    try {
      const thoughts = await Thought.find().populate('comments');
      return thoughts;
    } catch (error) {
      throw new Error("Failed to fetch thoughts");
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

app.listen(5000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
