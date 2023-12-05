import db from '../config/connection';
import { Profile } from '../models';
import cleanDB from './cleanDB';
import profileSeeds from './profileSeeds.json';

db.once('open', async () => {
  try {
    await cleanDB('Profile', 'profiles')
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
