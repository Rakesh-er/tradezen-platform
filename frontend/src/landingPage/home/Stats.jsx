import React from "react";

export default function Stats() {
  return (
    <div className="container p-4">
      <div className="row p-4">
        <div className="col-6 p-4">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>

          <h2 className="fs-4 mt-5 fw-bold text-muted">
            Customer-first always
          </h2>
          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
          >
            That's why 1.6+ crore customers trust TradeZen with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4 mt-5 fw-bold text-muted">No spam or gimmicks</h2>
          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
          >
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "#387ed1" }}
            >
              Our philosophies
            </a>
          </p>

          <h2 className="fs-4 mt-5 fw-bold text-muted">
            The TradeZen universe
          </h2>
          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
          >
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mt-5 fw-bold text-muted">Do better with money</h2>
          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
          >
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-6 p-4">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            style={{ width: "100%" }}
            className="img-fluid mt-5"
          />
          <div className="text-center mt-4">
            <a
              href="#"
              className="mx-4 text-decoration-none"
              style={{ color: "#387ed1", fontSize: "1.1rem" }}
            >
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "#387ed1", fontSize: "1.1rem" }}
            >
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
