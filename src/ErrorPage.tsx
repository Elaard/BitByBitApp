import { useRouteError } from "react-router-dom";
import { useNavigationReturn } from "./Utils/Hooks.ts/useNavigationReturn";

export default function ErrorPage() {
  const error = useRouteError() as any;

  const navigateBack = useNavigationReturn();

  return (
    <div id="error-page" className="error-page">
      <div className="error-page-content">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button className="btn btn-error margin-small-top" onClick={navigateBack}>&larr; Back</button>
      </div>
    </div>
  );
}