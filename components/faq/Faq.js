"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Faq.module.css";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "What is React?",
    answer:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'. ",
  },
  {
    question: "How do I create a component in React?",
    answer:
      "Components in React can be created as functions or classes. A simple component is created using a function that returns React elements. Components can also be created by extending the React.Component class, defining a render method that returns React elements.",
  },
  {
    question: "What are hooks in React?",
    answer:
      "Hooks are a new addition in React 16.8 that allow you to use state and other React features without writing a class. Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.",
  },
];

const FaqItem = ({ faq, index, toggleFaq, activeFaq }) => {
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);

  // useEffect hook ka istemal karenge jab bhi activeFaq update hota hai
  useEffect(() => {
    if (activeFaq === index) {
      // Agar ye active faq hai to iska height set karenge
      setHeightState(`${content.current.scrollHeight}px`);
    } else {
      // Warna iska height 0px karenge
      setHeightState("0px");
    }
  }, [activeFaq, index]);

  const toggleItem = () => {
    toggleFaq(index); // Yahaan hum bas index bhej rahe hain, active check parent component mein hoga
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
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};


const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

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
