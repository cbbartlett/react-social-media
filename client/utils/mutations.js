import { gql } from '@apollo/client';

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
