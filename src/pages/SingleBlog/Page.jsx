import React from "react";
import MdxRenderer from "../../components/MdxRenderer";
import BlogContent from "./Loan.mdx";
import "./style.css";

const SingleBlog = () => {
  return (
    <div className="singleblog-page">
      <div className="blog-content">
        <MdxRenderer>
          <BlogContent />
        </MdxRenderer>
      </div>
    </div>
  );
  
};

export default SingleBlog;
