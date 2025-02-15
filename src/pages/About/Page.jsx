import React from "react";
import "./style.css";
import b1 from "../../assets/Bank/AXIS.svg";
import b2 from "../../assets/Bank/BAJAJ.svg";
import b3 from "../../assets/Bank/FEDRAL.svg";
import b4 from "../../assets/Bank/HDFC.svg";
import b5 from "../../assets/Bank/HSBC.svg";
import b7 from "../../assets/Bank/KOTAK.svg";
import b8 from "../../assets/Bank/PNB.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    infinite: true, // Enable infinite scrolling
    speed: 100, // Transition speed in milliseconds
    slidesToShow: 6, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 2000, // Auto-scroll interval (2 seconds)
    arrows: false, // Hide navigation arrows
    pauseOnHover: true, // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for screens smaller than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust settings for screens smaller than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust settings for screens smaller than 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Bank logos array
  const bankLogos = [b1, b2, b3, b4, b5, b7, b8];

  return (
    <>
      <div className="aboutus-page-header">
        <h1>
          About <span className="highlight">Us</span>
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

      <div className="trusted-banks-section">
        <h1>
          Trusted <span className="highlight">Banks</span>
        <div className="trusted-banks-underline"></div>
        </h1>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {bankLogos.map((logo, index) => (
              <div key={index} className="bank-logo-container">
                <img
                  src={logo}
                  alt={`Bank Logo ${index + 1}`}
                  className="bank-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default About;
