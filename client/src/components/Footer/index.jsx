// Our import statements so we can use useLocation and useNavigate.
import { useLocation, useNavigate } from 'react-router-dom';

// Our variable that handles the Footer's location.
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // This is what the variable returns. It returns a string of HTML that the App.jsx displays.
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
          Project 'Y' made by the{' '}
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
// Exporting our variable so it can be called in other files.
export default Footer;