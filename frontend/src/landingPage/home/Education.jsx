import React from "react";

export default function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        {/* Left Section: Image */}
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="education"
            style={{ width: "70%" }}
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="col-6 p-4">
          <h1 className="mb-3 fs-2 mt-5">Free and open market education</h1>

          <p className="mt-4 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none", color: "#387ed1" }}>
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none", color: "#387ed1" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
