import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  // Example: Simulating a route error
  const simulateRouteError = () => {
    const error = new Error('Simulated route error');
    console.error(error);

    navigate('/error'); // Replace '/error' with the route you want to navigate to
  };

  simulateRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* Display custom error message */}
        <i>Custom error message here</i>
      </p>
    </div>
  );
}
