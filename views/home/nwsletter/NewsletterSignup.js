import React from "react";
import styles from "./newsletter-signup.module.css";
import Link from "next/link";
import { ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const NewsletterSignup = () => {
  return (
    <section className={`${styles.newsletterSignup}  gradient-bg`}>
      <div className={styles.newsletterSignupContainer}>
        <div className={styles.newsletterContent}>
          <h2>Get top insights and news from our search experts</h2>
          <p>Delivered to you daily, straight to your inbox.</p>
          <div className={styles.links}>
            <Link className={styles.link} href="/">
              Terms
            </Link>
            <span>|</span>
            <Link className={styles.link} href="/">
              Privacy
            </Link>
          </div>
        </div>
        <form action="/" method="post" className={styles.signupForm}>
          <div className={styles.inputGroup}>
            <div className={styles.inputContainer}>
              <EnvelopeIcon className={`${styles.emailIcon} btn-icon`} />
              <input type="email" placeholder="Enter your email address" />
            </div>
          </div>
          <div className={styles.formFooter}>
            <div className={styles.consent}>
              <input type="checkbox" id="consent" name="consent" required />
              <label htmlFor="consent">
                I agree with the storage & processing of my personal data
              </label>
            </div>
            <button type="submit" className={`${styles.submitButton}`}>
              Submit <ChevronRightIcon className="btn-icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
