const resolvers = {
  Mutation: {
    loginUser: (parent, args) => {
      const { username, password } = args;
      const user = users.find((user) => user.username === username && user.password === password);
      if (!user) {
        throw new Error('Invalid username or password');
      }
      return user;
    },
  },
};
