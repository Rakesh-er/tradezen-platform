import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container border-top bg-light">
      <div className="container mt-5">
        {/* --- Top Section: 4 Columns --- */}
        <div className="row mt-5">
          {/* Column 1: Logo, Socials & Copyright */}
          <div className="col-12 col-md-3">
            <div className="footer-logo mb-3">
              <i className="fa-solid fa-chart-simple me-2"></i>
              TradeZen
            </div>
            <p className="text-muted text-small">
              &copy; 2010 - {new Date().getFullYear()}, TradeZen Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="social-icons mb-3">
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <div className="social-icons border-bottom pb-3 mb-3">
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="col-12 col-md-3">
            <h5 className="footer-heading fs-4">Company</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Referral programme</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">TradeZen.tech</a>
              </li>
              <li>
                <a href="#">Press & media</a>
              </li>
              <li>
                <a href="#">TradeZen Cares (CSR)</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div className="col-12 col-md-3">
            <h5 className="footer-heading fs-4">Support</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support portal</a>
              </li>
              <li>
                <a href="#">Z-Connect blog</a>
              </li>
              <li>
                <a href="#">List of charges</a>
              </li>
              <li>
                <a href="#">Downloads & resources</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">Market overview</a>
              </li>
              <li>
                <a href="#">How to file a complaint?</a>
              </li>
              <li>
                <a href="#">Status of your complaints</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            {/* Account Section */}
            <h5 className="footer-heading fs-4">Account</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Open an account</a>
              </li>
              <li>
                <a href="#">Fund transfer</a>
              </li>
              <li>
                <a href="#">Minor demat account</a>
              </li>
              <li>
                <a href="#">NRI demat account</a>
              </li>
            </ul>

            <h5 className="footer-heading mt-4 fs-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Upcoming IPOs</a>
              </li>
              <li>
                <a href="#">Brokerage charges</a>
              </li>
              <li>
                <a href="#">Market holidays</a>
              </li>
              <li>
                <a href="#">Economic calendar</a>
              </li>
              <li>
                <a href="#">Calculators</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Section: Legal Fine Print --- */}
        <div className="row mt-5 text-small text-muted legal-text">
          <div className="col-12">
            <p>
              TradeZen Broking Ltd.: Member of NSE, BSE & MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through TradeZen Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through TradeZen Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: TradeZen Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              <a href="#">complaints@tradezen.com</a>, for DP related to
              <a href="#">dp@tradezen.com</a>. Please ensure you carefully read
              the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on <a href="#">SEBI SCORES</a> &
              <a href="#">Exchange portal</a>. Investors/Client can send
              complaints to <a href="#">investorcomplaints@tradezen.com</a>.
            </p>
            <p>
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of TradeZen and offering such
              services, please <a href="#">create a ticket here</a>.
            </p>

            {/* Bottom Links Line */}
            <div className="text-center mt-5 mb-3 footer-bottom-links">
              <a href="#">NSE</a>
              <a href="#">BSE</a>
              <a href="#">MCX</a>
              <a href="#">Terms & conditions</a>
              <a href="#">Policies & procedures</a>
              <a href="#">Privacy policy</a>
              <a href="#">Disclosure</a>
              <a href="#">For investor's attention</a>
              <a href="#">Investor charter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
