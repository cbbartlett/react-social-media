import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import logo from '../../assets/Y.png';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    // <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
          <img className="m-0" src={logo} alt="Project Y"></img>
          </Link>
          <p className="m-0">Share your thoughts....Y not?</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/">
                Logout 
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/profile">
                 Profile
              </Link>
            </>
          )}
        </div>
      </div>
    // </header>
  );
};

export { Header as default };
