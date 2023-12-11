import usersResolvers from './createUser.js';
import commentsResolvers from './Thoughts.js';


export default {
    Query: {
      ...usersResolvers.Query
    },
    Mutation: {
      ...usersResolvers.Mutation,
      ...commentsResolvers.Mutation
    }
  };