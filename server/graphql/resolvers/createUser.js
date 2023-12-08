const resolvers = {
    Mutation: {
      createUser: async (parent, args) => {
        const { username, password } = args;
  
        try {
          const newUser = new User({ username, password });
          const savedUser = await newUser.save();
  
          return savedUser;
        } catch (error) {
          console.error('Error creating user:', error);
          throw new Error('Failed to create user');
        }
      },
    },
  };
  