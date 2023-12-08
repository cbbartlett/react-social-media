import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
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
        const token = response.data.loginUser.token;
        // Store the token in local storage or state for future use
        console.log('Login successful');
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
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
        <Route path="/Home" element={<button type="button" onClick={handleLogin}>Login</button>}/>
      </form>
    </div>
  );
};

export default Login;
