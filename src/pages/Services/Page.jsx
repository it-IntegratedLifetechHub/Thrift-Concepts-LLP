import React from "react";
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

import S1 from "../../assets/homeloan.png";
import S2 from "../../assets/personal.jpg";
import S3 from "../../assets/car.jpg";
import S4 from "../../assets/education.jpg";
import S5 from "../../assets/business.jpg";
import S6 from "../../assets/gold.jpg";
import S7 from "../../assets/mutual.jpg";
import S8 from "../../assets/insurance.jpg";

const Services = () => {
  return (
    <>
      <div className="services-page">
        <h1 className="services-page-title">
          OUR <span className="services-page-highlight">SERVICES</span>
        </h1>
        <p className="services-page-subtitle">
          "Empowering Your Financial Journey with <br />
          Expert Solutions"
        </p>
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
       
      </div>
    </>
  );
};

export default Services;
