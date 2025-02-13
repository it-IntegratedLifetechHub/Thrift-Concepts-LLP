import React, { useState } from "react";
import "./style.css";

import { TbShieldCheck } from "react-icons/tb";
import { TbChartLine } from "react-icons/tb";
import { BiSolidCoin } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { TbHomeSpark } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";

import ThriftLogo from "../../assets/logo.png";

import v1 from "../../assets/video2.mp4";
import bank1 from "../../assets/HDFC.svg";
import bank2 from "../../assets/AXIS.svg";
import bank3 from "../../assets/ABCAPITAL.svg";
import bank4 from "../../assets/SBI.svg";
import bank5 from "../../assets/50.svg";

import S1 from "../../assets/homeloan.png";
import S2 from "../../assets/personal.jpg";
import S3 from "../../assets/car.jpg";
import S4 from "../../assets/education.jpg";
import S5 from "../../assets/business.jpg";
import S6 from "../../assets/gold.jpg";
import S7 from "../../assets/mutual.jpg";
import S8 from "../../assets/insurance.jpg";

import whyus from "../../assets/whyus.png";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    "At Thrift Concepts LLP, we prioritize financial clarity and strategic planning. Our expert consultants guide you in making informed decisions, ensuring your financial future is secure and prosperous.",
    "We offer tailored financial solutions designed to meet your specific needs. Whether it's budgeting, investments, or business finance strategies, our personalized approach ensures maximum growth and stability.",
    "Our team brings years of experience in financial planning and consultancy, helping individuals and businesses achieve their goals. With a deep understanding of market trends, we offer practical and results-driven strategies.",
    "Transparency and trust are at the core of our services. We believe in building lasting relationships by providing clear, honest, and data-backed financial advice that empowers you to take control of your finances.",
  ];

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
              <div className="verticalLine"></div>
              <div className="stats">
                <p className="number">43+</p>
                <p className="title">Title 2</p>
              </div>
              <div className="verticalLine"></div>
              <div className="stats">
                <p className="number">72+</p>
                <p className="title">Title 3</p>
              </div>
            </div>
            <p className="hero-number-title">
              "Our trusted banking partners include leading institutions that
              enable us to provide a wide range of finaLncial services, from
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
            <div className="aboutus-contact-button">
              <a href="#">Know More</a>
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="services-section">
          <h1 className="services-title">Our Services</h1>
          <div className="services-content">
            {/* Home Loan */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-card-front">
                  <div className="services-card-header">
                    <TbHomeSpark className="services-icon" />
                    <h2>Home Loan</h2>
                    <p>
                      Get the best home loan rates with flexible repayment
                      options.
                    </p>
                  </div>
                </div>
                <div className="services-card-back">
                  <img src={S1} alt="Home Loan" className="services-card-img" />

                  <h2>HOME LOAN</h2>
                  <button className="services-btn">Know More</button>
                </div>
              </div>
            </div>

            {/* Personal Loan */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-card-front">
                  <div className="services-card-header">
                    <FaPiggyBank className="services-icon" />
                    <h2>Personal Loan</h2>
                    <p>Get instant personal loans with minimal paperwork.</p>
                  </div>
                </div>
                <div className="services-card-back">
                  <img src={S2} alt="Home Loan" className="services-card-img" />

                  <h2>PERSONAL LOAN</h2>
                  <button className="services-btn">Know More</button>
                </div>
              </div>
            </div>

            {/* Car Loan */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-card-front">
                  <div className="services-card-header">
                    <FaCar className="services-icon" />
                    <h2>Car Loan</h2>
                    <p>
                      Get easy financing for your dream car with low interest
                      rates.
                    </p>
                  </div>
                </div>
                <div className="services-card-back">
                  <img src={S3} alt="Home Loan" className="services-card-img" />

                  <h2>CAR LOAN</h2>
                  <button className="services-btn">Know More</button>
                </div>
              </div>
            </div>

            {/* Education Loan */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-card-front">
                  <div className="services-card-header">
                    <FaSchool className="services-icon" />
                    <h2>Education Loan</h2>
                    <p>Fund your education with flexible repayment options.</p>
                  </div>
                </div>
                <div className="services-card-back">
                  <img src={S4} alt="Home Loan" className="services-card-img" />

                  <h2>EDUCATION LOAN</h2>
                  <button className="services-btn">Know More</button>
                </div>
              </div>
            </div>

            {/* Business Loan */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-card-front">
                  <div className="services-card-header">
                    <FaBriefcase className="services-icon" />
                    <h2>Business Loan</h2>
                    <p>
                      Get financial support to grow your business efficiently.
                    </p>
                  </div>
                </div>
                <div className="services-card-back">
                  <img src={S5} alt="Home Loan" className="services-card-img" />

                  <h2>BUSINESS LOAN</h2>
                  <button className="services-btn">Know More</button>
                </div>
              </div>
            </div>

            {/* Gold Loan */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-card-front">
                  <div className="services-card-header">
                    <BiSolidCoin className="services-icon" />
                    <h2>Gold Loan</h2>
                    <p>Instant loan against gold with low interest rates.</p>
                  </div>
                </div>
                <div className="services-card-back">
                  <img src={S6} alt="Home Loan" className="services-card-img" />

                  <h2>GOLD LOAN</h2>
                  <button className="services-btn">Know More</button>
                </div>
              </div>
            </div>

            {/* Mutual Funds */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-card-front">
                  <div className="services-card-header">
                    <TbChartLine className="services-icon" />
                    <h2>Mutual Funds</h2>
                    <p>
                      Invest in diversified mutual funds for long-term growth.
                    </p>
                  </div>
                </div>
                <div className="services-card-back">
                  <img src={S7} alt="Home Loan" className="services-card-img" />

                  <h2>MUTUAL FUNDS</h2>
                  <button className="services-btn">Know More</button>
                </div>
              </div>
            </div>

            {/* Insurance */}
            <div className="services-card">
              <div className="services-card-inner">
                <div className="services-card-front">
                  <div className="services-card-header">
                    <TbShieldCheck className="services-icon" />
                    <h2>Insurance</h2>
                    <p>
                      Secure your future with life, health, and asset insurance.
                    </p>
                  </div>
                </div>
                <div className="services-card-back">
                  <img src={S8} alt="Home Loan" className="services-card-img" />

                  <h2>INSURANCE</h2>
                  <button className="services-btn">Know More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus-contact-button">
          <a href="#">Know More</a>
          <MdArrowOutward />
        </div>
      </div>

      <div className="whyus">
        <div className="whyus-section">
          {/* Left Section */}
          <div className="whyus-content">
            <h1>
              <span className="highlight">Why</span> Choose us?
            </h1>

            {/* Tab Navigation */}
            <div className="tab">
              {["Our Clients", "We Know", "Strategy", "Portfolio"].map(
                (tab, index) => (
                  <div
                    key={index}
                    className={`tab-button ${
                      activeTab === index ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </div>
                )
              )}
            </div>

            {/* Tab Content */}
            <div className="tab-data">
              <p>{tabContent[activeTab]}</p>
            </div>
          </div>

          {/* Right Section - Image Layout */}
          <div className="whyus-images">
            <img src={whyus} alt="Why Us 1" className="whyus-img img1" />
          </div>
        </div>
      </div>
      <div class="blog">
        <div class="blog-section">
          <h1 class="blog-heading">
            <span>Our</span> Blogs
          </h1>
          <div class="blog-card-section">
            <div class="blog-card">
              <img src="blog-image.jpg" alt="Blog Image" class="blog-image" />
              <div class="blog-category">LOAN</div>
              <div class="blog-title">Top 5 Loans for Small Retailers</div>
              <div class="blog-profile">
                <img
                  src="profile.jpg"
                  alt="Profile Image"
                  class="blog-profile-image"
                />
                <div class="blog-profile-content">
                  <h2>John Doe</h2>
                  <p>10/11/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
