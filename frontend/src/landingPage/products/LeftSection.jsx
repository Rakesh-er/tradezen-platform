import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center mb-5">
        {/* Left Column: Image */}
        <div className="col-12 col-md-8 p-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        {/* Right Column: Text & Links */}
        <div className="col-12 col-md-4 p-5 ps-md-0">
          <h1 className="mb-4" style={{ color: "#424242", fontSize: "2rem" }}>
            {productName}
          </h1>
          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
          >
            {productDescription}
          </p>

          <div className="mt-3">
            {tryDemo && (
              <a href={tryDemo} className="text-decoration-none me-4">
                Try Demo
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {learnMore && (
              <a href={learnMore} className="text-decoration-none">
                Learn More
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>

          <div className="mt-3">
            {googlePlay && (
              <a href={googlePlay} className="me-3">
                <img src="media\images\googlePlayBadge.svg" alt="Google Play" />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img src="media\images\appstoreBadge.svg" alt="App Store" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
