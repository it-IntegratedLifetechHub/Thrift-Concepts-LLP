import React from "react";

const Header = () => {
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    toggle.addEventListener("click", () => {
      // Add show-menu class to nav menu
      nav.classList.toggle("show-menu");

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle("show-icon");
    });
  };

  showMenu("nav-toggle", "nav-menu");
  return (
    <>
      <header class="header">
        <nav class="nav container">
          <div class="nav__data">
            <a href="#" class="nav__logo">
              <i class="ri-planet-line"></i> Company
            </a>

            <div class="nav__toggle" id="nav-toggle">
              <i class="ri-menu-line nav__burger"></i>
              <i class="ri-close-line nav__close"></i>
            </div>
          </div>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li>
                <a href="#" class="nav__link">
                  Home
                </a>
              </li>

              <li>
                <a href="#" class="nav__link">
                  Company
                </a>
              </li>

              <li class="dropdown__item">
                <div class="nav__link">
                  Analytics <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul class="dropdown__menu">
                  <li>
                    <a href="#" class="dropdown__link">
                      <i class="ri-pie-chart-line"></i> Overview
                    </a>
                  </li>

                  <li>
                    <a href="#" class="dropdown__link">
                      <i class="ri-arrow-up-down-line"></i> Transactions
                    </a>
                  </li>

                  <li class="dropdown__subitem">
                    <div class="dropdown__link">
                      <i class="ri-bar-chart-line"></i> Reports{" "}
                      <i class="ri-add-line dropdown__add"></i>
                    </div>

                    <ul class="dropdown__submenu">
                      <li>
                        <a href="#" class="dropdown__sublink">
                          <i class="ri-file-list-line"></i> Documents
                        </a>
                      </li>

                      <li>
                        <a href="#" class="dropdown__sublink">
                          <i class="ri-cash-line"></i> Payments
                        </a>
                      </li>

                      <li>
                        <a href="#" class="dropdown__sublink">
                          <i class="ri-refund-2-line"></i> Refunds
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="nav__link">
                  Products
                </a>
              </li>

              <li class="dropdown__item">
                <div class="nav__link">
                  Users <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul class="dropdown__menu">
                  <li>
                    <a href="#" class="dropdown__link">
                      <i class="ri-user-line"></i> Profiles
                    </a>
                  </li>

                  <li>
                    <a href="#" class="dropdown__link">
                      <i class="ri-lock-line"></i> Accounts
                    </a>
                  </li>

                  <li>
                    <a href="#" class="dropdown__link">
                      <i class="ri-message-3-line"></i> Messages
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
