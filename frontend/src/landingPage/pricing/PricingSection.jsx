import React from "react";

export default function PricingSection() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row text-center">
        {/* Card 1 */}
        <div className="col-4 p-5">
          <img
            src="media\images\pricing-eq.svg"
            style={{ width: "80%" }}
            alt="Free equity delivery"
          />
          <h1 className="fs-3 mb-3 mt-4">Free equity delivery</h1>
          <p className="text-muted small-text">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-4 p-5">
          <img
            src="media\images\other-trades.svg"
            style={{ width: "80%" }}
            alt="Intraday trades"
          />
          <h1 className="fs-3 mb-3 mt-4">Intraday & F&O trades</h1>
          <p className="text-muted small-text">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-4 p-5">
          <img
            src="media\images\pricing-eq.svg"
            style={{ width: "80%" }}
            alt="Free direct mutual funds"
          />
          <h1 className="fs-3 mb-3 mt-4">Free direct mutual funds</h1>
          <p className="text-muted small-text">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
