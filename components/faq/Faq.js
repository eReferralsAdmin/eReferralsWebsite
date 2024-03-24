"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Faq.module.css";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import PortableText from "react-portable-text";
import { fetchFAQs } from "../../lib/fetchData";

const FaqItem = ({ faq, index, toggleFaq, activeFaq }) => {
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);

  useEffect(() => {
    if (activeFaq === index) {
      setHeightState(`${content.current.scrollHeight}px`);
    } else {
      setHeightState("0px");
    }
  }, [activeFaq, index]);

  const toggleItem = () => {
    toggleFaq(index);
  };

  return (
    <div
      className={`${styles.faq} ${activeFaq === index ? styles.active : ""}`}
    >
      <div className={styles.question} onClick={toggleItem}>
        <p>{faq.question}</p>
        {activeFaq === index ? (
          <ChevronUpIcon className={styles.chevronUpIcon} />
        ) : (
          <ChevronDownIcon className={styles.chevronUpIcon} />
        )}
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles.answer}
      >
        <PortableText
          content={faq.answer}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          serializers={{
            h1: (props) => <h1 className={styles.h1} {...props} />,
            li: ({ children }) => (
              <li className="special-list-item">{children}</li>
            ),
            normal: (props) => <p className={styles.p} {...props} />,
          }}
        />
      </div>
    </div>
  );
};

const Faq = ({ faqs }) => {
  const [activeFaq, setActiveFaq] = useState(null);
  // const [faqs, setFaqs] = useState([]);

  // useEffect(() => {
  //   const getFAQs = async () => {
  //     const fetchedFAQs = await fetchFAQs();
  //     setFaqs(fetchedFAQs);
  //   };

  //   getFAQs();
  // }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            activeFaq={activeFaq}
            toggleFaq={toggleFaq}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
