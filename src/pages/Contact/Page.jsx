import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-container">
        {/* Left Section - Contact Information */}
        <div className="contact-page-left">
          <h1 className="contact-page-header">
            CONTACT <span className="contact-page-highlight">INFORMATION</span>
          </h1>
          <p className="contact-page-description">
            You're welcome to contact us through any of the following methods
          </p>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.9193236854294!2d72.87898507430629!3d19.103939682106375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8bd850fe24b%3A0xc190a88be735d0b5!2sImprints%20INC!5e1!3m2!1sen!2sin!4v1726071394981!5m2!1sen!2sin"
            className="contact-page-map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Social Icons */}
          <div className="contact-page-social-icons">
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

          {/* Contact Details */}
          <div className="contact-page-details">
            <h2>Email</h2>
            <p className="contact-page-email">info@thriftconceptsllp.com</p>
            <h2>Phone</h2>
            <p className="contact-page-phone">+91 9324389141</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-page-right">
          <h1 className="contact-page-header-right">
            LET'S <span className="contact-page-highlight">TALK</span>
          </h1>
          <p className="contact-page-subtitle">Consultation is free</p>

          <form className="contact-page-form">
            <input
              type="text"
              placeholder="Full Name / Company Name"
              required
            />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone No." required />
            <textarea placeholder="Message" required></textarea>

            <button type="submit" className="contact-page-submit-btn">
              Book a Free Appointment
              <span className="contact-page-arrow">
                <MdArrowOutward />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
