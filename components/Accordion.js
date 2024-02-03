"use client";
import React, { useState } from "react";
import styles from "../styles/Accordion.module.css";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const Accordion = ({ title, description }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <dwiv
      className={styles.accordionContainer}
      onClick={() => setAccordionOpen(!accordionOpen)}
    >
      <button className={styles.accordionQuestionButton}>
        <span className={styles.accordionQuestionText}>{title}</span>
        <span className={styles.accordionIcon}>
          <ChevronUpIcon className={styles.upIcon} />
        </span>
      </button>

      <ul
        className={`${styles.accordionAnswerContainer} ${
          accordionOpen ? styles.dBlock : styles.dNone
        }`}
      >
        <li>{description}</li>
      </ul>
    </dwiv>
  );
};

export default Accordion;
