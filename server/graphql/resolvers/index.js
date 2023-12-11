import usersResolvers from './createUser.js';


export default {
    Query: {
      ...usersResolvers.Query
    },
    Mutation: {
      ...usersResolvers.Mutation,
      ...commentsResolvers.Mutation
    }
  };