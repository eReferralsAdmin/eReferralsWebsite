import React from "react";
import styles from "./practictioner.module.css";
import Image from "next/image";
import {
  ChevronRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import Faq from "../../../components/Faq";

const recommendations = [
  {
    quote: "Excellent resource for understanding patient safety nuances.",
    imageUrl: "/images/test1.png",
    name: "Dr. Jane Smith",
    title: "Cardiologist at HeartCare Clinic",
  },
  {
    quote: "A thorough dive into the procedural standards of care.",
    imageUrl: "/images/test1.png",
    name: "Dr. Emily Doe",
    title: "General Practitioner at Wellness Center",
  },
];

const faqs = [
  {
    title: "What is Mobile app development?",
    description:
      "It’s the creation of digital system that are tailored for mobile devices. Now more than ever the world needs to be mobilised with their business and systems and Mobile app development is the most relevant path to take. As per any other Application Development, the process is to gather requirements, define functionalities, design, build, deliver and support these mobile apps tailored for the business purpose.",
  },
];

const PratictionersPage = () => {
  return (
    <>
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
        </div>
      </section>
      {/* <RecommendationSection /> */}
      <Faq faqs={faqs} />
    </>
  );
};

export default PratictionersPage;
