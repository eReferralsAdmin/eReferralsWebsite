"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import styles from "./newsletter-signup.module.css";

const NewsletterSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new URLSearchParams();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("Form successfully submitted!");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.log(error);
      toast.error("Error submitting form");
    }
  };

  return (
    <section className={`${styles.newsletterSignup} gradient-bg`}>
      <Toaster />
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
        <form
          name="newsletter-form"
          className={styles.signupForm}
          method="POST"
          data-netlify="true"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="newsletter-form" />
          <div className={styles.inputGroup}>
            <div className={styles.inputContainer}>
              <EnvelopeIcon className={`${styles.emailIcon} btn-icon`} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                {...register("email", { required: true })}
                required
              />
            </div>
          </div>
          <div className={styles.formFooter}>
            <div className={styles.consent}>
              <input
                type="checkbox"
                id="newsletter-consent"
                name="newsletter-consent"
                {...register("newsletter-consent", { required: true })}
                required
              />
              <label htmlFor="newsletter-consent">
                I agree with the storage & processing of my personal data
              </label>
            </div>
            <button
              type="submit"
              className={`${styles.submitButton}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}{" "}
              <ChevronRightIcon className="btn-icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
