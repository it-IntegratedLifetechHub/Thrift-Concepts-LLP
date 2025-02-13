import React from "react";
import "./style.css";
import { MdArrowOutward } from "react-icons/md";
import ThriftLogo from "../../assets/logo.png";

import v1 from "../../assets/video2.mp4";
import bank1 from "../../assets/HDFC.svg";
import bank2 from "../../assets/AXIS.svg";
import bank3 from "../../assets/ABCAPITAL.svg";
import bank4 from "../../assets/SBI.svg";
import bank5 from "../../assets/50.svg";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-section">
          <div className="hero-content text-section">
            <h1 className="hero-header-left">
              "<span className="highlight">YOUR</span> VISION, <br />
              <span className="highlight">OUR</span> STRATEGY"
            </h1>
            <p className="hero-para-left">
              We are a comprehensive financial advisory firm offering tailored
              solutions in loans, investments, insurance, and wealth management.
              We empower individuals and businesses to achieve financial
              stability and growth.
            </p>
          </div>

          <div className="hero-content video-section">
            <video src={v1} autoPlay loop muted className="hero-video"></video>
          </div>

          <div className="hero-content stats-section">
            <div className="hero-numbers">
              <div className="stats">
                <p className="number">57+</p>
                <p className="title">Title 1</p>
              </div>
              <div className="stats">
                <p className="number">43+</p>
                <p className="title">Title 2</p>
              </div>
              <div className="stats">
                <p className="number">72+</p>
                <p className="title">Title 3</p>
              </div>
            </div>
            <p className="hero-number-title">
              "Our trusted banking partners include leading institutions that
              enable us to provide a wide range of financial services, from
              loans to wealth management solutions."
            </p>
            <div className="hero-bank">
              <img src={bank1} alt="HDFC" />
              <img src={bank2} alt="AXIS" />
              <img src={bank3} alt="ABCAPITAL" />
              <img src={bank4} alt="SBI" />
              <img src={bank5} alt="50" />
            </div>
            <div className="hero-contact-button">
              <a href="#">Let's Talk</a>
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus">
        <div className="aboutus-section">
          <div className="aboutus-content-left">
            <h2 className="about-us-heading">We Are,</h2>
            <img
              src={ThriftLogo}
              alt="Thrift Concepts LLP Logo"
              className="aboutus-logo"
            />
          </div>
          <div className="aboutus-content-right">
            <p>
              “We are a comprehensive
              <span className="highlight"> financial advisory </span> firm
              offering tailored solutions in{" "}
              <span className="highlight"> loans </span>,
              <span className="highlight"> investments </span>,
              <span className="highlight"> insurance </span>, and
              <span className="highlight"> wealth management </span>. We empower
              individuals and businesses to achieve financial stability and
              growth.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
