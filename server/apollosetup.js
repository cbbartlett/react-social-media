import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './graphql/schema.js';

const app = express();

const server = new ApolloServer({ typeDefs });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer().then(() => {
  app.listen({ port: 5000 }, () =>
    console.log(`Server ready at http://localhost:4000/graphql`)
  );
});
