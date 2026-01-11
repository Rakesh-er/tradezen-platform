import React from "react";

export default function ChargesForAccountOpening() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col px-4">
          <h3 className="fs-4 mb-4 text-muted">Charges for account opening</h3>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" className="text-muted fw-normal">
                  Type of account
                </th>
                <th scope="col" className="text-muted fw-normal">
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td>
                  <span className="badge bg-warning text-dark">FREE</span>
                </td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td>₹ 200</td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
