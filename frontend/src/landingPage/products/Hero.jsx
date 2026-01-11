import React from "react";

export default function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5 mb-5">
        <h1
          className="mt-4 mb-3"
          style={{ color: "#424242", fontSize: "2.8rem" }}
        >
          Technology
        </h1>
        <h5 className="text-muted fs-4">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="mt-3 mb-5">
          Check out our &nbsp;
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings <i className="fa fa-long-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
