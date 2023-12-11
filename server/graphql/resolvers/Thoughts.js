import { ObjectId } from 'mongodb';

const resolvers = {
  Query: {
    thoughts: async () => {
      // Logic to fetch thoughts from the database
      const thoughts = await db.collection('thoughts').find().toArray();
      return thoughts;
    },
    comments: async () => {
      // Logic to fetch comments from the database
      const comments = await db.collection('comments').find().toArray();
      return comments;
    },
  },
  Mutation: {
    
      deleteThought: async (parent, args) => {
        await Thought.findByIdAndDelete(args.id);
        return {
          id: args.id
        };
      }
    },
    
    createThought: async (_, { thoughtText }) => {
      // Logic to create a new thought in the database
      const thought = {
        _id: new ObjectId(),
        thoughtText,
      };
      await db.collection('thoughts').insertOne(thought);
      return thought;
    },
    createComment: async (_, { commentText, thoughtId }) => {
      // Logic to create a new comment for a thought in the database
      const comment = {
        _id: new ObjectId(),
        commentText,
        thoughtId,
      };
      await db.collection('comments').insertOne(comment);
      return comment;
    },
  },
  Thought: {
    comments: async (thought) => {
      // Logic to fetch comments for a specific thought from the database
      const comments = await db.collection('comments').find({ thoughtId: thought._id }).toArray();
      return comments;
    },
  },
};

export default resolvers;
