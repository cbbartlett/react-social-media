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


export default model('Thought', thoughtSchema);
