import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
var isLoggedIn;
const SIGNUP_MUTATION = gql`
  mutation Signup($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
    }
  }
`;

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION);

  const handleSignup = () => {
    signup({ variables: { username, password } })
      .then(() => {
        console.log('Signup successful');
        isLoggedIn == true;
      })
      .catch((error) => {
        console.error('Signup error:', error);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <Route path="/Home" element={<button type="button" onClick={handleSignup}>Sign Up!</button>}/>
      </form>
    </div>
  );
};

export default Signup;

