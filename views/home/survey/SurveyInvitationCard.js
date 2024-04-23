import React from "react";
import styles from "./SurveyInvitationCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";

const SurveyInvitationCard = ({ data }) => {
  return (
    <div className={styles.surveyInvitationCard}>
      <div className={styles.surveyInvitationContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/home/survey-image.jpeg"
            alt="Hand holding a pen over survey forms"
            className={styles.surveyImage}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
        <PortableText value={data.title} />
      </div>
      <div className={styles.surveyContent}>
      <PortableText value={data.description} />
        <Link
          href="https://docs.google.com/forms/d/1zj72ePxRInMYBP1Npqrx_FXIOoPsYQ3vyTq3DSSc7fY/edit?ts=64fa5484."
          className={styles.surveyButton}
        >
          Participate <ChevronRightIcon className="btn-icon" />
        </Link>
      </div>
    </div>
  );
};

export default SurveyInvitationCard;
