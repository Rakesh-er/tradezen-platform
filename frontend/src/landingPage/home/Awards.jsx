import React from "react";

export default function Awards() {
  return (
    <div className="container mt-5 mb-4">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media\images\largestBroker.svg" alt="largestBroker" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million TradeZen client attribute to over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li className="mb-3">Features and Options</li>
                <li className="mb-3">Commodity derivatives</li>
                <li className="mb-3">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="mb-3">Stocks and IPOs</li>
                <li className="mb-3">Direct mutual funds</li>
                <li className="mb-3">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media\images\pressLogos.png" alt="pressLogos" style={{width: "100%"}} className="mt-3"/>
        </div>
      </div>
    </div>
  );
}
