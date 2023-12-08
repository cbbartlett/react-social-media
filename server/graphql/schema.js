import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    createdAt: String!
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
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default typeDefs;
