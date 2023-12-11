// Import statements importing other resolvers from the same folder
import postsResolvers from './posts.js';
import usersResolvers from './createUser.js';
import commentsResolvers from './Thoughts.js';


export default {
    Post: {
      likeCount: (parent) => parent.likes.length,
      commentCount: (parent) => parent.comments.length
    },
    Query: {
      ...postsResolvers.Query,
      ...usersResolvers.Query
    },
    Mutation: {
      ...usersResolvers.Mutation,
      ...postsResolvers.Mutation,
      ...commentsResolvers.Mutation
    }
  };