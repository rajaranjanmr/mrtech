import React from "react";
import "./Footer.css";

const Footer = ({ contactUsRef }) => {
  return (
    <footer className="footer" ref={contactUsRef}>
      <div className="footer-container">
        {/* <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms and Conditions</a>
            </li>
          </ul>
        </div> */}

        {/* <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="/frequently-asked-questions">FAQ</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div> */}

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p className="">Office Address:</p>
          <p>Email:</p>
          <p>Phone: +91 7717764690</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} MR Tech Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
