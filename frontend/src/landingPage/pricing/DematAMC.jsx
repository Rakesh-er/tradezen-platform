import React from "react";

export default function DematAMC() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col px-4">
          <h3 className="fs-4 mb-4 mt-4 text-muted">
            Demat AMC (Annual Maintenance Charges)
          </h3>
          <p className="text-muted fs-5 mb-5" style={{ lineHeight: "1.8" }}>
            ₹ 300 / year + GST charged quarterly (₹ 75 + GST every quarter).
            Free for basic services demat account (BSDA).
          </p>
        </div>
      </div>
    </div>
  );
}
