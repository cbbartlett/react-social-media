import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the shared CSS file
import logo from '../assets/Y.png';




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
  const navigate = useNavigate(); 

  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION);

  const handleSignup = async () => {
    try {
      signup({ variables: { username, password } })
        .then(() => {
          console.log('Signup successful');
          navigate('/login');
        })
        .catch((error) => {
          console.error('Signup error:', error);
        });
    } catch (error) {
      console.error('Error handling signup:', error);
    }
  };
  


  return (
  <div>
    <img className="logo" src={logo} alt="Project Y"></img>
    <div className="LsContainer">
      <h2 className='LSh2'>Signup</h2>
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
        <Route path="/Home" element={<button type="button" onClick={handleSignup}>Sign Up!</button>}/>
        <button className='LsButton' type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
    </div>
  );
};

export default Signup;