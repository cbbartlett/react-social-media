import mongoose from 'mongoose';
import User from './models/User.js';

mongoose.connect('mongodb+srv://root:root@socialmediacluster.0txf60c.mongodb.net/Dasocialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    // Create a new user
    const user = new User({
        username: 'John Doe',
        password: 'Password',
    });

    // Save the user to the database
    await user.save();

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Disconnect from the database
    mongoose.disconnect();
  }
};

seedData();
