import React from "react";

export default function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1
          className="mt-5 mb-5 text-muted"
          style={{ fontSize: "1.3rem", fontWeight: "600" }}
        >
          Want to know more about our technology stack? Check out the &nbsp;
          <a href="#" style={{ textDecoration: "none" }}>
            TradeZen.tech
          </a>
          &nbsp; blog.
        </h1>

        <h1
          className="mt-5 mb-3"
          style={{ fontSize: "2rem", color: "#424242" }}
        >
          The TradeZen Universe
        </h1>
        <p className="mt-3 " style={{ fontSize: "1rem", fontWeight: "500" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/TradeZenFundhouse.png"
            style={{ width: "150px" }}
            className="img-fluid text-muted"
            alt="TradeZen Fundhouse"
          />
          <br />
          <p
            className="mt-4 text-muted px-4"
            style={{ fontSize: "1rem", fontWeight: "500" }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "180px" }}
            className="img-fluid"
            alt="Sensibull"
          />
          <br />
          <p
            className="mt-4 text-muted px-4"
            style={{ fontSize: "1rem", fontWeight: "500" }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/tijori.svg"
            style={{ width: "120px" }}
            className="img-fluid"
            alt="Tijori"
          />
          <br />
          <p
            className="mt-4 text-muted px-4"
            style={{ fontSize: "1rem", fontWeight: "500" }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "140px" }}
            className="img-fluid"
            alt="Streak"
          />
          <br />
          <p
            className="mt-4 text-muted px-4"
            style={{ fontSize: "1rem", fontWeight: "500" }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "150px" }}
            className="img-fluid"
            alt="Smallcase"
          />
          <br />
          <p
            className="mt-4 text-muted px-4"
            style={{ fontSize: "1rem", fontWeight: "500" }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "100px" }}
            className="img-fluid"
            alt="Ditto"
          />
          <br />
          <p
            className="mt-4 text-muted px-4"
            style={{ fontSize: "1rem", fontWeight: "500" }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <button
          className="btn btn-primary fs-5 mb-5 mt-5"
          style={{
            width: "200px",
            margin: "0 auto",
            backgroundColor: "#387ed1",
          }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}
