import React from "react";

export default function Hero() {
  return (
    <div className="container">
      {/* --- Section 1: Hero Quote --- */}
      <div className="row text-center mb-5">
        <div className="col-12 p-5">
          <h1 className="about-hero-heading mt-5 mb-5">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </h1>
          <div className="border-bottom mt-5"></div>
        </div>
      </div>

      {/* --- Section 2: History & Context --- */}
      <div className="row text-section container-width-fix mx-auto">
        {/* Left Column */}
        <div className="col-12 col-md-5 ">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            TradeZen, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* middle column: space */}
        <div className="col-12 col-md-2 px-2"></div>
        {/* Right Column */}
        <div className="col-12 col-md-5 ">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" className="link-style">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our &nbsp;
            <a href="#" className="link-style">
              blog
            </a>
            &nbsp; or see what the media is saying &nbsp;
            <a href="#" className="link-style">
              about us
            </a>
            &nbsp; or learn more about our business and product&nbsp;
            <a href="#" className="link-style">
              philosophies
            </a>
            &nbsp; .
          </p>
        </div>
      </div>
    </div>
  );
}
