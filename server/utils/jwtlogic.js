import jwt from 'jsonwebtoken';
// Secret key used to sign the JWT tokens
const secretKey = 'your-secret-key';

// Function to generate a JWT token
const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

// Function to verify and decode a JWT token
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

// Example of using the generateToken function
const user = { id: '123', username: 'exampleUser' };
const token = generateToken(user);
console.log('Generated token:', token);

// Example of using the verifyToken function
try {
  const decodedToken = verifyToken(token);
  console.log('Decoded token:', decodedToken);
} catch (error) {
  console.error('Token verification failed:', error.message);
}


