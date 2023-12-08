const { ApolloServer, gql } = require('apollo-server');

// Mock user data
const users = [
  { id: '1', username: 'user1', password: 'password1' },
  { id: '2', username: 'user2', password: 'password2' },
];

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Mutation {
    loginUser(username: String!, password: String!): User!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

const resolvers = {
  Mutation: {
    loginUser: (parent, args) => {
      const { username, password } = args;
      const user = users.find((user) => user.username === username && user.password === password);
      if (!user) {
        throw new Error('Invalid username or password');
      }
      return user;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
