import mongoose from 'mongoose';
import User from './models/User.js';
import Thought from './models/thought.js';
import Comment from './models/comment.js';
import "dotenv/config";
import { ApolloServer, gql } from 'apollo-server';

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GraphQL schema
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
  }

  type Query {
    _dummy: String
  }

  type Thought {
    _id: ID!
    thoughtText: String!
    userId: ID!
  }

  type Comment {
    _id: ID!
    thoughtId: ID!
    commentText: String!
    createdAt: String!
  }

  type Mutation {
    seedComments: String!
  }
`;

// GraphQL resolvers
const resolvers = {
  Mutation: {
    seedComments: async () => {
      try {
        // Create a user
        const user = await User.create({
          username: 'john_doe',
          password: 'password123',
        });

        // Create a thought
        const thought = await Thought.create({
          thoughtText: 'TESTING TESTING 123',
          userId: user._id,
        });

        // Create comments
        const comments = [
          {
            thoughtId: thought._id,
            commentText: 'Great thought!',
            createdAt: new Date(),
          },
          {
            thoughtId: thought._id,
            commentText: 'I agree with you.',
            createdAt: new Date(),
          },
          {
            thoughtId: thought._id,
            commentText: 'Interesting perspective.',
            createdAt: new Date(),
          },
        ];

        for (const commentData of comments) {
          await Comment.create({
            ...commentData,
            userId: user._id,
          });
        }

        return 'Seed completed successfully';
      } catch (error) {
        console.error('Seed failed:', error);
        throw new Error('Seed failed');
      }
    },
  },
};

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Apollo Server running at ${url}`);
});

try {
  const { data } = await server.executeOperation({
    query: gql`
      mutation {
        seedComments
      }
    `,
  });
  console.log(data);
} catch (error) {
  console.error('Seeding failed:', error);
};