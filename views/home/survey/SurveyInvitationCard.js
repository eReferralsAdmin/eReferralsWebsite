import React from "react";
import styles from "./SurveyInvitationCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const SurveyInvitationCard = () => {
  return (
    <div className={styles.surveyInvitationCard}>
      <div className={styles.surveyInvitationContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/survey-image.jpeg"
            alt="Hand holding a pen over survey forms"
            className={styles.surveyImage}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
        <h2>Tell us your opinion</h2>
      </div>
      <div className={styles.surveyContent}>
        <p>
          We developed a quick survey for you to share your thoughts and
          participate in the development of our solution to help the Australian
          health System.
        </p>
        <Link href="/" className={styles.surveyButton}>
          Participate <ChevronRightIcon className="btn-icon" />
        </Link>
      </div>
    </div>
  );
};

export default SurveyInvitationCard;
