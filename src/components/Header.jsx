import React, { useState } from "react";
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
            <RiPlanetLine /> Company
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
              <a href="#" className="nav__link">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="nav__link">
                About us
              </a>
            </li>

            <li
              className={`dropdown__item ${reportsOpen ? "show-dropdown" : ""}`}
            >
              <div className="nav__link" onClick={toggleReports}>
                Tools <RiAddLine className="dropdown__arrow" />
              </div>

              <ul
                className={`dropdown__menu ${
                  reportsOpen ? "show-dropdown" : ""
                }`}
              >
                <li>
                  <a href="#emi" className="dropdown__link">
                    <RiPieChartLine /> EMI Calculator
                  </a>
                </li>

                <li>
                  <a href="#budg" className="dropdown__link">
                    <RiArrowUpDownLine /> Budget Tracking
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="nav__link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Blogs
              </a>
            </li>
            <li className="contact-hidden">
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__data">
          <ul className="nav__hidden">
            <li>
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
