import React from "react";
import styles from "./SurveyInvitationCard.module.css";

const SurveyInvitationCard = () => {
  return (
    <div className={styles.surveyInvitationCard}>
      <h2>Tell us your opinion</h2>
      <img
        src="/images/survey-image.jpeg"
        alt="Hand holding a pen over survey forms"
        className={styles.surveyImage}
      />
      <div className={styles.surveyContent}>
        <p>
          We developed a quick survey for you to share your thoughts and
          participate in the development of our solution to help the Australian
          health System.
        </p>
        <a
          href="link-to-survey"
          className={`${styles.surveyButton} btn-primary`}
        >
          Participate
          <i className="ri-arrow-right-s-line button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default SurveyInvitationCard;
