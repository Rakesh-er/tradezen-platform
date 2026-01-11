import React from "react";

export default function OptionalValue() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col px-4">
          <h3 className="fs-4 mb-5 text-muted">
            Optional value added services
          </h3>

          <ul className="list-group list-group-flush text-muted">
            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <div>
                <h6 className="mb-1">Call & Trade</h6>
                <small>
                  Additional charges of ₹50 per order for orders placed through
                  a dealer at TradeZen.
                </small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <div>
                <h6 className="mb-1">Physical contact notes</h6>
                <small>₹20 per contract note plus courier charges.</small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <div>
                <h6 className="mb-1">Account modification</h6>
                <small>
                  ₹25 per request for modification of account details.
                </small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
