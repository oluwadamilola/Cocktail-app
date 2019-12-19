import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <>
      <h1>error page</h1>
      <section className="error-page section">
        <div className="error-container">
          <h1>oops! its a dead end</h1>
          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
        </div>
      </section>
    </>
  );
}
