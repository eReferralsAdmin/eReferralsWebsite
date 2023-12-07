import React from "react";
import styles from "./newsletter-signup.module.css";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const NewsletterSignup = () => {
  return (
    <section className={`${styles.newsletterSignup}  gradient-bg`}>
      <div className={styles.newsletterContent}>
        <h2>Get top insights and news from our search experts</h2>
        <p>Delivered to you daily, straight to your inbox.</p>
        <div className={styles.links}>
          <Link href="/">Terms</Link> |
          <Link href="/">Privacy</Link>
        </div>
      </div>
      <form action="/" method="post" className={styles.signupForm}>
        <div className={styles.inputGroup}>
          <div className={styles.inputContainer}>
            <EnvelopeIcon className={styles.emailIcon} />
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
          <button
            type="submit"
            className={`${styles.submitButton} btn-primary`}
          >
            Submit &gt;
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterSignup;
