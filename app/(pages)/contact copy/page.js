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
    { label: "Patient", value: "Patient" },
    { label: "Pratictioner", value: "Pratictioner" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-netlify="true"
      name="contact"
      className={styles.formContainer}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className={styles.formHeading}>
        <h2>Contact us!</h2>
        <p>We respond within 24 hours.</p>
      </div>
      <textarea
        className={`${styles.formInput} ${styles.textareaContainer}`}
        {...register("message", { required: "Your message is required." })}
        placeholder="Enter your message"
        rows={8}
      ></textarea>
      {errors.message && (
        <p className={styles.errorMessage}>{errors.message.message}</p>
      )}

      <SegmentedControl
        options={segmentOptions}
        name="role"
        activeSegment={segment}
        onSegmentChange={setSegment}
        paddleActive={isPaddleActive}
      />

      {errors.role && (
        <p className={styles.errorMessage}>{errors.role.message}</p>
      )}

      <div className={styles.inputGroup}>
        <input
          className={styles.formInput}
          {...register("name", { required: "Name is required." })}
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <p className={styles.errorMessage}>{errors.name.message}</p>
        )}

        <input
          className={styles.formInput}
          {...register("email", {
            required: "Enter a valid email address.",
            pattern: /^\S+@\S+$/i,
          })}
          type="email"
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.consentContainer}>
        <input
          {...register("consent", {
            required: "You must agree before submitting.",
          })}
          type="checkbox"
        />
        <label htmlFor="consent" className={styles.consentLabel}>
          I agree with the storage & processing of my personal data
        </label>
      </div>
      {errors.consent && (
        <p className={styles.errorMessage}>{errors.consent.message}</p>
      )}

      <button className={"primaryButton"} type="submit">
        <span>Send</span>
        <ChevronRightIcon className="chevronRightIcon" />
      </button>

      <div className="tos">
        <Link href="/terms">Terms</Link> <MinusIcon className="minusIcon" />
        <Link href="/privacy">Privacy</Link>
      </div>
    </form>
  );
};

export default ContactUs;
