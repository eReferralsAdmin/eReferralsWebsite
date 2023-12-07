// Filename: SignupContainer.jsx
import React from "react";
import styles from "./Signup.module.css"; // Importing the CSS module
import {
  ArrowRightIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  MinusIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Signup = () => {
  return (
    <section className={styles.signupContainer}>
      <div className={styles.signupContent}>
        <div className={styles.header}>
          <div className={styles.branding}>
            {/* <img src="/images/ereferrals-icon.svg" alt="eReferrals Icon" /> */}
            <img src="/logo.svg" alt="eReferrals Logo" />
          </div>
          <span className={styles.divider}>|</span>
          <div className={styles.signupSection}>
            <p>Sign up for</p>
            <p>BETA VERSION</p>
          </div>
        </div>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleBtn} ${styles.active}`}
            aria-pressed="true"
          >
            For Practitioners
          </button>
          <button className={styles.toggleBtn} aria-pressed="false">
            For Patients
          </button>
        </div>
        <div className={styles.container}>
          <form className={styles.signupForm}>
            <div className={styles.inputGroup}>
              <div className={styles.inputContainer}>
                <UserIcon className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputContainer}>
                <PhoneIcon className={styles.inputIcon} />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputContainer}>
                <EnvelopeIcon className={styles.inputIcon} />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.inputField}
                />
              </div>
            </div>
            <label className={styles.checkboxContainer}>
              <input type="checkbox" />I agree with the storage & processing of
              my personal data
            </label>
            <div className={styles.links}>
              <Link href="/">Terms</Link> | <Link href="/">Privacy</Link>
            </div>
            <button
              type="submit"
              className={`${styles.btnGetStarted} btn-primary`}
            >
              Get started <ChevronRightIcon className="btn-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
