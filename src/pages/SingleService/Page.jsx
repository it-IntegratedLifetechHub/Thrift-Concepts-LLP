import React, { useState } from "react";
import HomeLoan from "../../assets/homeloan.png";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import "./style.css";

const SingleService = () => {
  const faqs = [
    {
      question: "Question 1",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus impedit, ratione architecto ab laboriosam ullam officia ipsa repudiandae perspiciatis voluptatibus officiis veniam nobis iure laborum quaerat similique doloremque excepturi eum!",
    },
    {
      question: "Question 2",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus impedit, ratione architecto ab laboriosam ullam officia ipsa repudiandae perspiciatis voluptatibus officiis veniam nobis iure laborum quaerat similique doloremque excepturi eum!",
    },
    {
      question: "Question 3",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus impedit, ratione architecto ab laboriosam ullam officia ipsa repudiandae perspiciatis voluptatibus officiis veniam nobis iure laborum quaerat similique doloremque excepturi eum!",
    },
    {
      question: "Question 4",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus impedit, ratione architecto ab laboriosam ullam officia ipsa repudiandae perspiciatis voluptatibus officiis veniam nobis iure laborum quaerat similique doloremque excepturi eum!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Open the first FAQ by default

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="single-service">
      <div className="single-service-hero">
        <img src={HomeLoan} alt="Home Loan" className="single-service-img" />
        <div className="single-service-content">
          <h1 className="single-service-title">HOME LOAN</h1>
          <button className="single-service-btn">
            Book a Free Appointment <MdArrowOutward className="arrow-icon" />
          </button>
        </div>
      </div>
      <div className="single-service-data">
        <div className="single-service-data-info">
          <h1 className="single-service-data-title">
            HOME <span className="highlight"> LOAN</span>
          </h1>
          <p className="single-service-data-description">
            Home loan is a secured loan given to individuals who aspire to build
            or buy a house. The property so purchased is mortgaged in the name
            of the lending institution as security, till the time the loan is
            fully repaid. The lending institution will hold the original
            property-related documents till the time the loan is fully repaid
            along with the interest. To buy a house, be it under construction,
            ready or resale property, the residence buyer can seek a loan from
            banks or financial institutions through financial advisors. It
            should be noted that the terms and conditions of the housing loan
            can differ widely in terms of loan amount, maturity period, interest
            rate, repayment mode, etc.
          </p>
          <p className="single-service-data-description">
            Home loan is a secured loan given to individuals who aspire to build
            or buy a house. The property so purchased is mortgaged in the name
            of the lending institution as security, till the time the loan is
            fully repaid. The lending institution will hold the original
            property-related documents till the time the loan is fully repaid
            along with the interest. To buy a house, be it under construction,
            ready or resale property, the residence buyer can seek a loan from
            banks or financial institutions through financial advisors. It
            should be noted that the terms and conditions of the housing loan
            can differ widely in terms of loan amount, maturity period, interest
            rate, repayment mode, etc.
          </p>
        </div>

        <div className="single-service-data-services">
          <h1 className="single-service-data-title">
            Explore <span className="highlight">Other Services</span>
          </h1>
          <ul className="single-service-data-list">
            <li className="single-service-data-item">Home Loan</li>
            <hr className="single-service-data-divider" />
            <li className="single-service-data-item">Car Loan</li>
            <hr className="single-service-data-divider" />
            <li className="single-service-data-item">Mutual Funds</li>
            <hr className="single-service-data-divider" />
          </ul>
        </div>
      </div>
      <div className="services-qna">
        {faqs.map((faq, index) => (
          <div key={index} className="services-qna-item">
            <div
              className="services-qna-question"
              onClick={() => toggleAccordion(index)}
            >
              <h1>{faq.question}</h1>
              <IoIosArrowDown
                className={`arrow ${activeIndex === index ? "rotated" : ""}`}
              />
            </div>
            <div
              className={`services-qna-answer ${
                activeIndex === index ? "visible" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleService;
