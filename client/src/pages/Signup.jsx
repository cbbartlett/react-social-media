// Signup.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import '../App.css'; // Import the shared CSS file

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
      })
      .catch((error) => {
        console.error('Signup error:', error);
      });
  };

  return (
    <div className="LsContainer">
      <h2 className='LsH2'>Signup</h2>
      <form className='LsForm'>
        <label className='LsLable'>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label className='LsLable'>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className='LsButton' type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
