import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';

import dotenv from 'dotenv';
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});

const PORT = process.env.port || 8080;


mongoose.connect('mongodb+srv://root:root@socialmediacluster.0txf60c.mongodb.net/?retryWrites=true&w=majority');

//   .then(() => {
//     console.log('MongoDB Connected')
//     return server.listen({ port: PORT })
//   })
//   .then(res => {
//     console.log(`Server running at ${res.url}`)
//   })
//   .catch(err => {
//     console.error(err)
//   })
