import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET; // Replace with your own secret key

const payload = {
  id: userId, 
  username: username,
};

const token = jwt.sign(payload, secretKey);

