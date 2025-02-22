import React from "react";
import "./style.css";

import { IoSearchOutline } from "react-icons/io5";

import blogbg from "../../assets/blog-bg.png";
import profile from "../../assets/profile.png";

const Blogs = () => {
  return (
    <div className="blog-page">
      <p className="blog-page-header">
        "Financial Insights: Navigate, Grow, Prosper"
      </p>
      <div className="search-container">
        <input
          type="text"
          placeholder="What are you looking for?.."
          className="search-input"
        />
        <button className="search-button">
          <IoSearchOutline className="search-icon" />
        </button>
      </div>

      <div className="blog-card-section">
        <div className="blog-card">
          <img src={blogbg} alt="Blog Image" className="blog-image" />
          <div className="blog-card-content">
            <div className="blog-category">LOAN</div>
            <div className="blog-title">Top 5 Loans for Small Retailers</div>
          </div>
          <div className="blog-profile">
            <img
              src={profile}
              alt="Profile Image"
              className="blog-profile-image"
            />
            <div className="blog-profile-content">
              <h2>John Doe</h2>
              <p>10/11/2024</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src={blogbg} alt="Blog Image" className="blog-image" />
          <div className="blog-card-content">
            <div className="blog-category">LOAN</div>
            <div className="blog-title">Top 5 Loans for Small Retailers</div>
          </div>
          <div className="blog-profile">
            <img
              src={profile}
              alt="Profile Image"
              className="blog-profile-image"
            />
            <div className="blog-profile-content">
              <h2>John Doe</h2>
              <p>10/11/2024</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src={blogbg} alt="Blog Image" className="blog-image" />
          <div className="blog-card-content">
            <div className="blog-category">LOAN</div>
            <div className="blog-title">Top 5 Loans for Small Retailers</div>
          </div>
          <div className="blog-profile">
            <img
              src={profile}
              alt="Profile Image"
              className="blog-profile-image"
            />
            <div className="blog-profile-content">
              <h2>John Doe</h2>
              <p>10/11/2024</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src={blogbg} alt="Blog Image" className="blog-image" />
          <div className="blog-card-content">
            <div className="blog-category">LOAN</div>
            <div className="blog-title">Top 5 Loans for Small Retailers</div>
          </div>
          <div className="blog-profile">
            <img
              src={profile}
              alt="Profile Image"
              className="blog-profile-image"
            />
            <div className="blog-profile-content">
              <h2>John Doe</h2>
              <p>10/11/2024</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src={blogbg} alt="Blog Image" className="blog-image" />
          <div className="blog-card-content">
            <div className="blog-category">LOAN</div>
            <div className="blog-title">Top 5 Loans for Small Retailers</div>
          </div>
          <div className="blog-profile">
            <img
              src={profile}
              alt="Profile Image"
              className="blog-profile-image"
            />
            <div className="blog-profile-content">
              <h2>John Doe</h2>
              <p>10/11/2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
