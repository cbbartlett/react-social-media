// Importing our schema from our DB
import { model, Schema, mongoose } from 'mongoose';

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

// Export statement so that we can call this in other files
export default model('Thought', thoughtSchema);
