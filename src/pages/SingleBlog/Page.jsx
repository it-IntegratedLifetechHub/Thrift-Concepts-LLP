import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../BlogContent/invest.json";
import "./style.css";

const SingleBlog = () => {
  const { blogname } = useParams(); // Get blog title from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selectedBlog = data.blogs.find(
      (b) => b.title.toLowerCase().replace(/\s+/g, "-") === blogname
    );
    setBlog(selectedBlog);
  }, [blogname]);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <div className="mdx-page">
        <h1 className="mdx-title">{blog.title}</h1>
        <div className="mdx-header-content">
          <div className="mdx-subtitle">{blog.subtitle}</div>
          <span className="mdx-date">{blog.date}</span>
        </div>
        <div className="mdx-image-container">
          <img
            src={blog.image.src}
            alt={blog.image.alt}
            className="mdx-image"
          />
        </div>
        <div className="mdx-content">
          {blog.content.map((section, index) => (
            <div key={index}>
              {section.type === "paragraph" && (
                <div className="mdx-paragraph">{section.text}</div>
              )}
              {section.type === "section" && (
                <>
                  <h2 className="mdx-heading">{section.heading}</h2>
                  <div className="mdx-paragraph">{section.text}</div>
                  {section.pros && (
                    <>
                      <strong>Pros:</strong>
                      <ul className="mdx-list">
                        {section.pros.map((pro, i) => (
                          <li key={i} className="mdx-list-item">
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {section.cons && (
                    <>
                      <strong>Cons:</strong>
                      <ul className="mdx-list">
                        {section.cons.map((con, i) => (
                          <li key={i} className="mdx-list-item">
                            {con}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mdx-paragraph mdx-call-to-action">
        {blog.call_to_action}
      </div>
    </>
  );
};

export default SingleBlog;
