import postsResolvers from './posts';
import usersResolvers from './users';
import commentsResolvers from './comments';


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