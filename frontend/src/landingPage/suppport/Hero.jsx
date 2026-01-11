import React from "react";

export default function Hero() {
  return (
    <div className="container-fluid pt-5 pb-5" id="supportHero">
      <div className="container pt-3">
        {/* Title and Top Link */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h4 className="support-logo">Support Portal</h4>
          <a href="#" className="track-tickets-link topic-heading-track ">
            Track tickets
          </a>
        </div>

        {/* Search Section */}
        <div className="row text-center mb-5">
          <div className="col-12">
            <h3 className="hero-heading mb-4">
              Search for an answer or browse help topics to create a ticket
            </h3>

            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Eg: how do i activate F&O, why is my order rejected ..."
                className="form-control support-search-input"
              />
              <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>

            {/* Quick Links / Featured */}
            <div className="featured-links mt-4">
              <a href="#" className="topic-heading-link">
                Track account opening
              </a>
              <a href="#" className="topic-heading-link">
                Track segment activation
              </a>
              <a href="#" className="topic-heading-link">
                Intraday margins
              </a>
              <a href="#" className="topic-heading-link">
                Kite user manual
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
