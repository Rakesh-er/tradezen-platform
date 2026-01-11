import React from "react";

export default function CreateTicket() {
  return (
    <div className="container pt-5 pb-5 ms-5">
      <h4 className="text-muted mb-5 fs-5 ms-4">
        To create a ticket, select a relevant topic
      </h4>

      {/* Row 1 */}
      <div className="row mb-5 ms-5">
        {/* Column 1: Account Opening */}
        <div className="col-4 p-3">
          <h5 className="topic-heading">
            <i className="fa-solid fa-circle-plus me-2"></i> Account Opening
          </h5>
          <div className="topic-links">
            <a href="#">Getting started</a>
            <a href="#">Online</a>
            <a href="#">Offline</a>
            <a href="#">Charges</a>
            <a href="#">Company, Partnership and HUF</a>
            <a href="#">Non Resident Indian (NRI)</a>
          </div>
        </div>

        {/* Column 2: Your TradeZen Account */}
        <div className="col-4 p-3">
          <h5 className="topic-heading">
            <i className="fa-regular fa-user me-2"></i> Your TradeZen Account
          </h5>
          <div className="topic-links">
            <a href="#">Login credentials</a>
            <a href="#">Your Profile</a>
            <a href="#">Account modification and segment addition</a>
            <a href="#">CMR & DP ID</a>
            <a href="#">Nomination</a>
            <a href="#">Transfer and conversion of shares</a>
          </div>
        </div>

        {/* Column 3: Trading and Markets */}
        <div className="col-4 p-3">
          <h5 className="topic-heading">
            <i className="fa-solid fa-arrow-trend-up me-2"></i> Trading and
            Markets
          </h5>
          <div className="topic-links">
            <a href="#">Trading FAQs</a>
            <a href="#">Kite</a>
            <a href="#">Margins</a>
            <a href="#">Product and order types</a>
            <a href="#">Corporate actions</a>
            <a href="#">Kite features</a>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row mb-5 ms-5">
        {/* Column 4: Funds */}
        <div className="col-4 p-3">
          <h5 className="topic-heading">
            <i className="fa-solid fa-wallet me-2"></i> Funds
          </h5>
          <div className="topic-links">
            <a href="#">Fund withdrawal</a>
            <a href="#">Adding funds</a>
            <a href="#">Adding bank accounts</a>
            <a href="#">eMandates</a>
          </div>
        </div>

        {/* Column 5: Console */}
        <div className="col-4 p-3">
          <h5 className="topic-heading">
            <i className="fa-solid fa-chart-pie me-2"></i> Console
          </h5>
          <div className="topic-links">
            <a href="#">IPO</a>
            <a href="#">Portfolio</a>
            <a href="#">Funds statement</a>
            <a href="#">Profile</a>
            <a href="#">Reports</a>
            <a href="#">Referral program</a>
          </div>
        </div>

        {/* Column 6: Coin */}
        <div className="col-4 p-3">
          <h5 className="topic-heading">
            <i className="fa-solid fa-coins me-2"></i> Coin
          </h5>
          <div className="topic-links">
            <a href="#">Understanding mutual funds and Coin</a>
            <a href="#">Coin app</a>
            <a href="#">Coin web</a>
            <a href="#">Transactions and reports</a>
            <a href="#">National Pension Scheme (NPS)</a>
          </div>
        </div>
      </div>
    </div>
  );
}
