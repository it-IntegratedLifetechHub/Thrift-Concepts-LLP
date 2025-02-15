import React, { useState } from "react";
import { Link } from "react-router-dom";

import ThriftLogo from "../assets/logo.png";
import {
  RiPlanetLine,
  RiMenuLine,
  RiCloseLine,
  RiArrowDownSLine,
  RiAddLine,
  RiPieChartLine,
  RiArrowUpDownLine,
} from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Controls main menu
  const [reportsOpen, setReportsOpen] = useState(false); // Controls Tools dropdown

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleReports = () => {
    setReportsOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <img src={ThriftLogo} alt="" />
          </a>

          <div className="nav__toggle" onClick={toggleMenu}>
            {menuOpen ? (
              <RiCloseLine className="nav__icon" />
            ) : (
              <RiMenuLine className="nav__icon" />
            )}
          </div>
        </div>

        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`}>
          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav__link">
                About us
              </Link>
            </li>

            <li
              className={`dropdown__item ${reportsOpen ? "show-dropdown" : ""}`}
            >
              <Link className="nav__link" onClick={toggleReports}>
                {" "}
                Tools <RiAddLine className="dropdown__arrow" />
              </Link>

              <ul
                className={`dropdown__menu ${
                  reportsOpen ? "show-dropdown" : ""
                }`}
              >
                <li>
                  <Link to="/emi-calc" className="dropdown__link">
                    <RiPieChartLine /> EMI Calculator
                  </Link>
                </li>

                <li>
                  <Link to="/budget-track" className="dropdown__link">
                    <RiArrowUpDownLine /> Budget Tracking
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/services" className="nav__link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="nav__link">
                Blogs
              </Link>
            </li>
            <li className="contact-hidden">
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__data">
          <ul className="nav__hidden contact-btn">
            <li>
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
