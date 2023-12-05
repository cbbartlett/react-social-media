<<<<<<< HEAD
=======
import { useRouteError } from "react-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
>>>>>>> 1d44878efd0577377e73e9f6cc77e7bdad4ab354
