import React from "react";

export default function Brokerage() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col px-4 ">
          <h3 className="fs-4 mb-5 text-muted text-center">
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "#387ed1" }}
            >
              Equity
            </a>{" "}
            &nbsp;|&nbsp;
            <a href="#" className="text-decoration-none ms-3 text-muted">
              Currency
            </a>{" "}
            &nbsp;|&nbsp;
            <a href="#" className="text-decoration-none ms-3 text-muted">
              Commodity
            </a>
          </h3>

          <div className="table-responsive">
            <table className="table table-hover border">
              <thead>
                <tr className="table-light">
                  <th className="text-muted fs-6 p-4">Charge heading</th>
                  <th className="text-muted fs-6 p-4">Equity Delivery</th>
                  <th className="text-muted fs-6 p-4">Equity Intraday</th>
                  <th className="text-muted fs-6 p-4">F&O - Futures</th>
                  <th className="text-muted fs-6 p-4">F&O - Options</th>
                </tr>
              </thead>
              <tbody className="text-muted" style={{ fontSize: "0.9rem" }}>
                <tr>
                  <td className="p-3">Brokerage</td>
                  <td className="p-3">Zero Brokerage</td>
                  <td className="p-3">
                    0.03% or ₹ 20/executed order whichever is lower
                  </td>
                  <td className="p-3">
                    0.03% or ₹ 20/executed order whichever is lower
                  </td>
                  <td className="p-3">Flat ₹ 20 per executed order</td>
                </tr>
                <tr>
                  <td className="p-3">STT/CWT</td>
                  <td className="p-3">0.1% on buy & sell</td>
                  <td className="p-3">0.025% on the sell side</td>
                  <td className="p-3">0.0125% on sell side</td>
                  <td className="p-3">0.0625% on sell side (on premium)</td>
                </tr>
                <tr>
                  <td className="p-3">Transaction charges</td>
                  <td className="p-3">NSE: 0.00325% | BSE: 0.003%</td>
                  <td className="p-3">NSE: 0.00325% | BSE: 0.003%</td>
                  <td className="p-3">NSE: 0.0019% | BSE: 0</td>
                  <td className="p-3">NSE: 0.05% (on premium)</td>
                </tr>
                <tr>
                  <td className="p-3">GST</td>
                  <td className="p-3">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-3">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-3">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-3">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td className="p-3">SEBI charges</td>
                  <td className="p-3">₹10 / crore</td>
                  <td className="p-3">₹10 / crore</td>
                  <td className="p-3">₹10 / crore</td>
                  <td className="p-3">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="p-3">Stamp charges</td>
                  <td className="p-3">0.015% or ₹1500 / crore on buy side</td>
                  <td className="p-3">0.003% or ₹300 / crore on buy side</td>
                  <td className="p-3">0.002% or ₹200 / crore on buy side</td>
                  <td className="p-3">0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4 mb-5">
            <a
              href="#"
              className="text-decoration-none fs-5"
              style={{ color: "#387ed1" }}
            >
              Calculate your brokerage costs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
