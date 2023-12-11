import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      _id
      username
    }
  }
`;

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
