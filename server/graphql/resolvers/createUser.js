const resolvers = {
  Mutation: {
    createUser: async (parent, args) => {
      const { username, password } = args.input;

      try {
        const newUser = new User({ username, password });
        const savedUser = await newUser.save();

        return savedUser;
      } catch (error) {
        console.error('Error creating user:', error);

        // Return a structured error object with a specific message
        return {
          message: 'Failed to create user. Please check the provided username and password.',
          code: 'USER_CREATION_ERROR',
        };
      }
    },
  },
};
