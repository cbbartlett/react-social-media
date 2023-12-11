// Our import statements so we can use react and apollo in this, as well as imports our CSS styling and useNavigate from react, and our mutations.
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

// Our signup mutation allowing for users to sign up using a username and a password
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

  const handleSignup = () => {
    signup({ variables: { username, password } })
      .then(() => {
        console.log('Signup successful');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Signup error:', error);
      });
  };
// This is what the variable returns. It returns a string of HTML that the App.jsx displays.
  return (
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
  );
};
// Exporting our variable so it can be called in other files.
export default Signup;