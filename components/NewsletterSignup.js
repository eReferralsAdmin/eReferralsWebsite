"use client";
import Link from "next/link";
import styles from "../styles/NewsletterSignup.module.css";
import { ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

const NewsletterSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className={`${styles.newsletterSignup}  gradient-bg`}>
      <div className={styles.newsletterContent}>
        <h2>Get top insights and news from our search experts</h2>
        <p>Delivered to you daily, straight to your inbox.</p>
        <div className={styles.links}>
          <Link href="/">Terms</Link>
          <span>|</span>
          <Link href="/">Privacy</Link>
        </div>
      </div>
      <form
        name="signup-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // onSubmit={handleSubmit(onSubmit)}
        className={styles.signupForm}
      >
        {/* Hidden field for Netlify */}
        <input type="hidden" name="form-name" value="signup-form" />
        <input type="hidden" name="bot-field" />{" "}
        {/* for Netlify bot filtering */}
        <div className={styles.inputGroup}>
          <div
            className={`${styles.inputContainer} ${
              errors.email ? styles.error : ""
            }`}
          >
            <EnvelopeIcon className={styles.emailIcon} />
            <input
              type="email"
              name="email" // Ensure the name attribute is set for Netlify
              {...register("email", { required: true })}
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className={styles.formFooter}>
          <div className={styles.consent}>
            <input
              type="checkbox"
              {...register("consent", { required: true })}
              id="consent"
              name="consent" // Ensure the name attribute is set for Netlify
              required
            />
            <label htmlFor="consent">
              I agree with the storage & processing of my personal data
            </label>
          </div>
          <button type="submit" className={`${styles.submitButton}`}>
            Submit <ChevronRightIcon className="btn-icon" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterSignup;
