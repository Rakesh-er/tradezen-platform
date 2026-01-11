import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div className="row mt-5 pt-5 mb-5">
        <h1 className="text-center section-heading mb-5">Founder & CEO</h1>

        {/* Image */}
        <div className="col-12 col-md-5 text-center">
          <img
            src="media\images\nithinKamath.jpg"
            alt="Nithin Kamath"
            className="founder-img rounded-circle"
          />
          <h5 className="mt-4 member-name">Nithin Kamath</h5>
          <p className="text-muted member-designation">Founder, CEO</p>
        </div>

        {/* Bio Text */}
        <div className="col-12 col-md-7 d-flex align-items-center">
          <div className="bio-text text-muted">
            <p>
              Nithin bootstrapped and founded TradeZen in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              TradeZen has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on
              <a href="#" className="link-style">
                Homepage
              </a>
              /
              <a href="#" className="link-style">
                TradingQnA
              </a>
              /
              <a href="#" className="link-style">
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
