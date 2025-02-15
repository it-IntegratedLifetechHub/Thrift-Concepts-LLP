import React from "react";
import "./style.css"; // Import the CSS file

const ErrorPage = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content-wrapper">
              <div className="four_zero_four_bg">
                <h1>404</h1>
              </div>

              <div className="contant_box_404">
                <h3>Looks like you're lost</h3>
                <p>The page you are looking for is not available!</p>
                <a href="/" className="link_404">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
