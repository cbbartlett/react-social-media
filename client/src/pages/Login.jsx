// Our import statements so we can use react and apollo, as well as imports our CSS styling and our mutations.
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import '../App.css';

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      id
      username
    }
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLogin = () => {
    login({ variables: { username, password } })
      .then((response) => {
        // Handle the successful login response here
        console.log('Login successful');
        console.log('User ID:', response.data.loginUser.id);
        console.log('Username:', response.data.loginUser.username);
      })
      .catch((error) => {
        // Handle the login error here
        console.error('Login error:', error);
      });
  };
  // This is what the variable returns. It returns a string of HTML that the App.jsx displays.
  return (
    <div className='LsContainer'>
      <h2 className='LSh2'>Login</h2>
      <form className='LsForm'>
        <label className='LsLabel'>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label className='LsLabel'>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className='LsButton' type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};
// Exporting our variable so it can be called in other files.
export default Login;
