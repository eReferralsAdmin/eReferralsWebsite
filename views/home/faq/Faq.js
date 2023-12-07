"use client";
import React, { useState } from "react";
import styles from "./FaqSection.module.css"; // Importing the CSS module

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqSectionH2}>Frequently Asked Questions</h2>
      <div className={styles.faqItem}>
        <button
          className={`${styles.faqQuestion} ${
            expanded ? styles.faqQuestionExpanded : ""
          }`}
          aria-expanded={expanded}
          aria-controls="faq2_desc"
          onClick={toggleExpand}
        >
          What are the benefits of mobile app development?
          <i className={`ri-arrow-down-s-line ${styles.faqIcon}`}></i>
        </button>
        <div
          className={`${styles.faqAnswer} ${expanded ? "d-block" : "d-none"}`}
          id="faq2_desc"
        >
          <p className={styles.faqAnswerP}>
            Mobile app development offers several benefits including increased
            accessibility for users, personalized user experiences, improved
            customer engagement, and the ability to leverage device capabilities
            like GPS, camera, and notifications. It also opens up opportunities
            for new business models and services.
          </p>
        </div>
      </div>

      <button className="pill-button">
        Ask a question <i className="ri-arrow-right-s-line button-icon"></i>
      </button>
    </section>
  );
};

export default Faq;
