// Import gql from apollo so we can create mutations.
import { gql } from '@apollo/client';

// Mutation used to create a user taking in two strings; One for Username and one for Password
export const CREATE_USER = gql`
mutation Signup($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
    }
  } {
      _id
      username
    }
  }
`;

// Mutation for logging in a user by matching the given username with the username in our DB and same for password
export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        _id
        username
      }
    }
  }
`;

// Mutation for creating and storing comments in our DB
export const CREATE_COMMENT = gql`
  mutation CreateComment($thoughtId: ID!, $commentText: String!) {
    createComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtId
      commentText
      createdAt
    }
  }
`;
