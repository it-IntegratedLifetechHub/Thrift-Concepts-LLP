import React, { useEffect, useState } from "react";
import "./style.css";
import { IoSearchOutline } from "react-icons/io5";
import BlogData from "../BlogContent/invest.json";
import profile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setBlogs(BlogData.blogs); // Load blog data
  }, []);

  // Filter blogs based on search input
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-page">
      <p className="blog-page-header">
        "Financial Insights: Navigate, Grow, Prosper"
      </p>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="What are you looking for?.."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">
          <IoSearchOutline className="search-icon" />
        </button>
      </div>

      {/* Blog List */}
      <div className="blog-card-section">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div
              key={index}
              className="blog-card"
              onClick={() =>
                navigate(
                  `/blogs/${blog.title.replace(/\s+/g, "-").toLowerCase()}`
                )
              }
            >
              <img
                src={blog.image.src}
                alt={blog.image.alt}
                className="blog-image"
              />
              <div className="blog-card-content">
                <div className="blog-category">{blog.category}</div>
                <div className="blog-title">
                  {blog.title.split(" ").slice(0, 6).join(" ")}
                  {blog.title.split(" ").length > 6 ? "..." : ""}
                </div>
              </div>
              <div className="blog-profile">
                <img
                  src={profile}
                  alt="Profile Image"
                  className="blog-profile-image"
                />
                <div className="blog-profile-content">
                  <h2>{blog.author || "Thrift Concepts"}</h2>
                  <p>{blog.date}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
