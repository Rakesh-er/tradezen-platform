import React from "react";

export default function Pricing() {
  return (
    <div className="container mb-5 p-4 mt-4">
      <div className="row p-4">
        {/* Left Section: Text Description (5 Columns) */}
        <div className="col-5 p-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Right Section: Pricing Cards (7 Columns) */}
        <div className="col-7 p-3">
          <div className="row text-center">
            {/* Pricing Item 1 */}
            <div className="col-4 p-1">
              <div className="d-flex align-items-center">
                <img
                  src="media/images/pricing-eq.svg"
                  alt="0-rupee"
                  style={{ width: "125px" }}
                />
                <div className="px-1 mt-4">
                  <p
                    className="text-muted mb-0 mt-4"
                    style={{ fontSize: "12px", textAlign: "left" }}
                  >
                    Free account opening
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Item 2 */}
            <div className="col-4 p-0">
              <div className="d-flex align-items-center">
                <img
                  src="media/images/pricing-eq.svg"
                  alt="0-rupee"
                  style={{ width: "125px" }}
                />
                <div className="px-1 mt-4">
                  <p
                    className="text-muted mb-0 mt-4 "
                    style={{ fontSize: "12px", textAlign: "left" }}
                  >
                    Free equity delivery and direct mutual funds
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Item 3 */}
            <div className="col-4 p-1">
              <div className="d-flex align-items-center">
                <img
                  src="media/images/other-trades.svg"
                  alt="20-rupee"
                  style={{ width: "125px" }}
                  className="mx-4"
                />
                <div className="px-1">
                  <p
                    className="text-muted mb-0 mt-4"
                    style={{ fontSize: "12px", textAlign: "left" }}
                  >
                    Intraday and F&O
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
