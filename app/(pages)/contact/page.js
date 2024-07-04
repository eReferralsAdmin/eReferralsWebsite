"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import SegmentedControl from "../../../components/ui/SegmentedControl";
import { ChevronRightIcon, MinusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Faq from "../../../components/faq/Faq";
import { fetchHomeFAQs } from "../../../lib/fetchData";
import toast from "react-hot-toast";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const getFAQs = async () => {
      const fetchedFAQs = await fetchHomeFAQs();
      setFaqs(fetchedFAQs);
    };

    getFAQs();
  }, []);

  const onSubmit = async (_, event) => {
    event.preventDefault();
    try {
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch("/forms/contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (res.status === 200) {
        reset();
        toast.success(
          "Thank you for contacting us. We will get back to you soon!"
        );
      } else {
        toast.error("There was an error while sending the message");
      }
    } catch (e) {
      toast.error("There was an error while sending the message");
    }
  };

  const [segment, setSegment] = useState("Practitioners");
  const [isPaddleActive, setIsPaddleActive] = useState(true);

  const segmentOptions = [
    { label: "Practitioners", value: "Practitioners" },
    { label: "Patient", value: "Patient" },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Contact us!</h2>
          <p>We respond within 24 hours.</p>
          <div className={styles.legalLinksHeader}>
            <Link href="/terms">Terms</Link>
            <MinusIcon className={styles.divider} />
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          name="contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.segmentedControlContainer}>
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
          </div>
          <input
            type="hidden"
            name="role"
            value={segment}
            {...register("role", { required: true })}
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className={styles.inputField}
            {...register("name", { required: "Name is required." })}
          />
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name.message}</p>
          )}

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
            className={styles.inputField}
            {...register("email", {
              required: "Enter a valid email address.",
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}

          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            className={`${styles.inputField} ${styles.textarea}`}
            rows={4}
            {...register("message", { required: "Your message is required." })}
          ></textarea>
          {errors.message && (
            <p className={styles.errorMessage}>{errors.message.message}</p>
          )}

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
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
      <div className={styles.faqContainer}>
        <Faq faqs={faqs} />
      </div>
    </>
  );
};

export default ContactUs;
