import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
});

export default model('User', userSchema);
