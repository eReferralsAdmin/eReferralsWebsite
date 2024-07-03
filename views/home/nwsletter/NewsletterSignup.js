"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import styles from "./newsletter-signup.module.css";
import { PortableText } from "@portabletext/react";

const NewsletterSignup = ({ content }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const response = await fetch("/api/newsletter", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   if (response.ok) {
    //     toast.success("Form successfully submitted!");
    //     reset();
    //     // router.push("/success");
    //   } else {
    //     toast.error("Error submitting form");
    //   }
    // } catch (error) {
    //   toast.error("Submission failed");
    // }

    try {
      setStatus("pending");
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch("/forms/newsletter-signup.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        toast.success("Form successfully submitted!");
        setStatus("ok");
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
        toast.error("Submission failed");
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
      toast.error(`Submission failed ${e}`);
    }
  };

  return (
    <section className={`${styles.newsletterSignup} gradient-bg`}>
      <Toaster />
      <div className={styles.newsletterSignupContainer}>
        <div className={styles.newsletterContent}>
          <PortableText value={content.title} />
          <PortableText value={content.subtitle} />
          <div className={styles.links}>
            <Link className={styles.link} href="/terms">
              Terms
            </Link>
            <span>|</span>
            <Link className={styles.link} href="/privacy">
              Privacy
            </Link>
          </div>
        </div>
        <form
          name="newsletter-form"
          className={styles.signupForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="newsletter-form" />
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
                value={"Agree"}
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
              {isSubmitting ? "Submitting..." : "Submit"}
              <ChevronRightIcon className="btn-icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
