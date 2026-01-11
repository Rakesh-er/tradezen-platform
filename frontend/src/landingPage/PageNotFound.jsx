import React from "react";

export default function PageNotFound() {
  return (
    <div className="container text-center py-5 mb-5 mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="section-title mb-3">Page Not Found</h1>

          <p className="section-subtext mb-4 text-muted">
            Sorry, the page you are looking for does not exist !
          </p>
        </div>
      </div>

        <button className="btn btn-primary">Go to Home</button>

    </div>
  );
}
