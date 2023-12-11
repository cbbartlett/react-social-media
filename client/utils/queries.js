// Importing apollo so we can use gql to create mutations
import { gql } from '@apollo/client';

// Variable that is used to fetch a user from the DB
export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      _id
      username
    }
  }
`;

// Variable that is used to fetch comments made by a user from the DB
export const GET_COMMENTS_BY_THOUGHT = gql`
  query GetCommentsByThought($thoughtId: ID!) {
    commentsByThought(thoughtId: $thoughtId) {
      _id
      thoughtId
      commentText
      createdAt
    }
  }
`;
