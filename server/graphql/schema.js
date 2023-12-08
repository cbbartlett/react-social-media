import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  input CreateUserInput {
    username: String!
    password: String!
  }

  type Query {
    getUser(id: ID!): User!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    loginUser(username: String!, password: String!): User!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default typeDefs;
