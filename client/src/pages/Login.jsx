import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Y.png';
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
  const navigate = useNavigate(); 

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLogin = () => {
    login({ variables: { username, password } })
      .then((response) => {
        // Handle the successful login response here
        console.log('Login successful');
        navigate('/Home1');
        console.log('User ID:', response.data.loginUser.id);
        console.log('Username:', response.data.loginUser.username);
      })
      .catch((error) => {
        // Handle the login error here
        console.error('Login error:', error);
      });
  };

  return (
    <div>
    <img className="logo" src={logo} alt="Project Y"></img>
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
  </div>
  );
};
export default Login;
