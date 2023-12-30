"use client";
import React, { useState } from "react";
import styles from "./Signup.module.css";
import {
  ChevronRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("practitioners");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.signupContainer}>
      <div className={styles.signupContent}>
        <div className={styles.header}>
          <div className={styles.branding}>
            <Image
              width={316}
              height={67}
              src="/logo.svg"
              alt="eReferrals Logo"
            />
          </div>
          <span className={styles.divider}></span>
          <div className={styles.signupSection}>
            <p>Sign up for</p>
            <p>BETA VERSION</p>
          </div>
        </div>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleBtn} ${
              activeTab === "practitioners" ? styles.active : ""
            }`}
            aria-pressed={activeTab === "practitioners"}
            onClick={() => toggleTab("practitioners")}
          >
            For Practitioners
          </button>
          <button
            className={`${styles.toggleBtn} ${
              activeTab === "patients" ? styles.active : ""
            }`}
            aria-pressed={activeTab === "patients"}
            onClick={() => toggleTab("patients")}
          >
            For Patients
          </button>
        </div>
        {activeTab === "practitioners" && (
          <div className={styles.container}>
            <form
              className={styles.signupForm}
              name="signup-for-beta-version"
              method="POST"
              data-netlify="true"
            >
              <input
                type="hidden"
                name="signup-for-beta-version"
                value="signup-for-beta-version"
              />
              <div className={styles.inputGroup}>
                <div className={styles.inputContainer}>
                  <UserIcon className={styles.inputIcon} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className={styles.inputField}
                    required
                  />
                </div>
                <div className={styles.inputContainer}>
                  <PhoneIcon className={styles.inputIcon} />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className={styles.inputField}
                    required
                  />
                </div>
                <div className={styles.inputContainer}>
                  <EnvelopeIcon className={styles.inputIcon} />
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={styles.inputField}
                    required
                  />
                </div>
              </div>
              <div className={styles.formFooter}>
                <div className={styles.consent}>
                  <input type="checkbox" id="consent" name="consent" required />
                  <label htmlFor="consent">
                    I agree with the storage & processing of my personal data
                  </label>
                </div>
                <div className={styles.links}>
                  <Link className={styles.link} href="/">
                    Terms
                  </Link>
                  <span>|</span>
                  <Link className={styles.link} href="/">
                    Privacy
                  </Link>
                </div>
                <button type="submit" className={`${styles.submitButton}`}>
                  Get Started <ChevronRightIcon className="btn-icon" />
                </button>
              </div>
            </form>
          </div>
        )}
        {activeTab === "patients" && (
          <div className={styles.container}>
            <form
              className={styles.signupForm}
              name="signup-for-beta-version"
              method="POST"
              data-netlify="true"
            >
              <input
                type="hidden"
                name="signup-for-beta-version"
                value="signup-for-beta-version"
              />
              <div className={styles.inputGroup}>
                <div className={styles.inputContainer}>
                  <UserIcon className={styles.inputIcon} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className={styles.inputField}
                    required
                  />
                </div>
                <div className={styles.inputContainer}>
                  <PhoneIcon className={styles.inputIcon} />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className={styles.inputField}
                    required
                  />
                </div>
                <div className={styles.inputContainer}>
                  <EnvelopeIcon className={styles.inputIcon} />
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={styles.inputField}
                    required
                  />
                </div>
              </div>
              <div className={styles.formFooter}>
                <div className={styles.consent}>
                  <input type="checkbox" id="consent" name="consent" required />
                  <label htmlFor="consent">
                    I agree with the storage & processing of my personal data
                  </label>
                </div>
                <div className={styles.links}>
                  <Link className={styles.link} href="/">
                    Terms
                  </Link>
                  <span>|</span>
                  <Link className={styles.link} href="/">
                    Privacy
                  </Link>
                </div>
                <button type="submit" className={`${styles.submitButton}`}>
                  Get Started <ChevronRightIcon className="btn-icon" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Signup;
