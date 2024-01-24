"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import SegmentedControl from "../../../components/ui/SegmentedControl";
import { ChevronRightIcon, MinusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle the form submission
  };

  const [segment, setSegment] = useState("Pratictioner");
  const [isPaddleActive, setIsPaddleActive] = useState(true);

  const segmentOptions = [
    { label: "Pratictioner", value: "Pratictioner" },
    { label: "Patient", value: "Patient" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Contact us!</h2>
        <p>We respond within 24 hours.</p>
        <div className={styles.legalLinksHeader}>
          <Link href="#terms">Terms</Link>
          <MinusIcon className={styles.divider} />
          <Link href="#privacy">Privacy</Link>
        </div>
      </div>

      <form className={styles.form}>
        <div className={styles.segmentedControlContainer}>
          <SegmentedControl
            options={segmentOptions}
            name="role"
            activeSegment={segment}
            onSegmentChange={setSegment}
            paddleActive={isPaddleActive}
          />
        </div>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          className={styles.inputField}
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          required
          className={styles.inputField}
        />

        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          required
          className={`${styles.inputField} ${styles.textarea}`}
          rows={4}
        ></textarea>

        <div className={styles.formBottom}>
          <div className={styles.consentContainer}>
            <input
              {...register("consent", {
                required: "You must agree before submitting.",
              })}
              id="consent"
              type="checkbox"
            />
            <label htmlFor="consent" className={styles.consentLabel}>
              I agree with the storage & processing of my personal data
            </label>
          </div>
          {errors.consent && (
            <p className={styles.errorMessage}>{errors.consent.message}</p>
          )}
          <button type="submit" className={styles.sendButton}>
            <span>Send</span>
            <ChevronRightIcon className="chevronRightIcon" />
          </button>
        </div>
      </form>

      <div className={styles.legalLinksFooter}>
        <Link href="#terms">Terms</Link>
        <MinusIcon className={styles.divider} />
        <Link href="#privacy">Privacy</Link>
      </div>
    </div>
  );
};

export default ContactUs;
