import { gql } from 'apollo-server';

const typeDefs = gql`
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
  createThought(input: CreateThoughtInput!): Thought!
  createComment(input: CreateCommentInput!): Comment!
}

type Query {
  hello: String
  thoughts: [Thought!]!
}
`;

export default typeDefs;