// Importing our schema from our DB
import { model, Schema, mongoose } from 'mongoose';

const commentSchema = new mongoose.Schema({
    thoughtId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought',
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  });
  // Export statement so that we can call this in other files
  export default model('Comment', commentSchema);