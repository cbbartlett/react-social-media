import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers/index.js';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000/graphql`)
);
