import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
  createdAt: String,
});

export default model('User', userSchema);
