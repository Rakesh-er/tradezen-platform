import React from "react";

export default function ChargesExplained() {
  return (
    <div className="container mb-5 pb-5 mt-5">
      <div className="row">
        <div className="col px-4">
          <h3 className="fs-4 mb-5 text-muted">Charges explained</h3>

          <div className="accordion text-muted" id="chargesAccordion">
            {/* Item 1 */}
            <div className="accordion-item border-0 mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold text-muted bg-white border-bottom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  Securities Transaction Tax (STT)
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#chargesAccordion"
              >
                <div className="accordion-body pt-3 pb-4">
                  Tax levied by the government when transacting on the
                  exchanges. Charged as above on both buy and sell sides when
                  trading equity delivery. Charged only on selling side when
                  trading intraday or on F&O.
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="accordion-item border-0 mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold text-muted bg-white border-bottom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  Transaction/Turnover Charges
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#chargesAccordion"
              >
                <div className="accordion-body pt-3 pb-4">
                  Charged by exchanges (NSE, BSE, MCX) on the value of your
                  transactions.
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="accordion-item border-0 mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold text-muted bg-white border-bottom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  Goods and Services Tax (GST)
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#chargesAccordion"
              >
                <div className="accordion-body pt-3 pb-4">
                  Tax levied by the government on the services rendered. 18% of
                  ( brokerage + SEBI charges + transaction charges).
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="accordion-item border-0 mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold text-muted bg-white border-bottom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  SEBI Charges
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#chargesAccordion"
              >
                <div className="accordion-body pt-3 pb-4">
                  Charged at ₹10 per crore + GST by Securities and Exchange
                  Board of India for regulating the markets.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
