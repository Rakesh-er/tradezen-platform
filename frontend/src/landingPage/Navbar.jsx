import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg TradeZen-navbar border-bottom">
      <div className="container">
        {/* Logo Section */}
        <Link className="navbar-brand brand-logo" to={"/"}>
          <i className="fa-solid fa-chart-simple me-2"></i>
          TradeZen
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links Section */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link custom-link " to={"/signup"}>
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to={"/about"}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to={"/product"}>
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to={"/pricing"}>
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to={"/support"}>
                Support
              </Link>
            </li>

            {/* Hamburger Icon - Visible on Desktop like TradeZen */}
            <li className="nav-item d-none d-lg-block ms-3 mt-1 mx-4">
              <Link className="nav-link custom-link" to={"/"}>
                <i className="fa-solid fa-bars fs-5"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
