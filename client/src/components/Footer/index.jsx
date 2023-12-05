<<<<<<< HEAD
import { useLocation, useNavigate } from "react-router-dom";

=======
import { useLocation, useNavigate } from 'react-dom';
>>>>>>> 1d44878efd0577377e73e9f6cc77e7bdad4ab354

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made by the{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            🐐
          </span>{' '}
          by Aeryk Andrews, Kelly Boyd, Jessica Linex, Christopher Bartlett, & Apollo Vavra.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;