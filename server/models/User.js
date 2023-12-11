// Importing our schema from our DB
import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
});
// Export statement so that we can call this in other files
export default model('User', userSchema);
