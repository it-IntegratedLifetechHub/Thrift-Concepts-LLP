import React from "react";
import "./style.css"; // Importing the CSS file

const About = () => {
  return (
    <>
      <div className="aboutus-page-header">
        <h1>
          About <span>Us</span>
        </h1>
        <div className="underline"></div>
      </div>
      <div className="aboutus-page-container">
        <div className="aboutus-page-content">
          <p>
            Welcome to <strong>“THRIFT CONCEPTS LLP”</strong>, a trusted partner
            in navigating the complexities of the financial world. We specialize
            in providing expert financial advice and innovative solutions to
            individuals, startups, and businesses, helping them achieve
            financial success and long-term growth.
          </p>

          <p>
            At <strong>“THRIFT CONCEPTS LLP”</strong>, we understand that every
            financial journey is unique. That’s why we adopt a personalized
            approach to address your specific needs, whether it’s financial
            planning, investment advisory, tax strategies, or risk management.
          </p>

          <p>
            With a team of seasoned experts and a commitment to excellence, we
            strive to simplify financial decisions and empower you to achieve
            your goals confidently.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
