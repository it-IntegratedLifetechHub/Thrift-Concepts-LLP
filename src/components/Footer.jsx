import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Logo and Social Media Section */}
          <div className="footer-logo">
            <img src="logo.png" alt="Thrift Concepts LLP" className="logo" />
            <p className="footer-text">
              "Stay connected! Follow us on social media for the latest tips,
              trends, and insights."
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Twitter (X)">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="footer-subscribe">
            <h3>Subscribe</h3>
            <p>
              Don’t miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your Email Address" />
              <button aria-label="Subscribe">&#10148;</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
      </footer>
        <div className="footer-bottom">
          <p>© 2024 Pixel Vikas</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Services</a>
          </div>
          <p>All Rights Reserved</p>
        </div>
    </>
  );
};

export default Footer;
