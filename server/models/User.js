import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  photoURL: { type: String, default: '' },
  isAdmin: Boolean
});

export default model('User', userSchema);
