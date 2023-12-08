import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import isLoggedIn from './pages/Signup'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        if(isLoggedIn)
        {
          <Route path="/profile" element={<Profile />} />
        }
        else if(!isLoggedIn)
        {
          <><Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} /></>
        }
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

