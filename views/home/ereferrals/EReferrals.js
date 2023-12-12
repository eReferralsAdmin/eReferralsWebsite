import React from "react";
import styles from "./ereferrals.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const EReferrals = () => {
  return (
    <section className={styles.eReferralsSection}>
      <h2>Learn more about eReferrals</h2>
      <div className={styles.ereferralContent}>
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
        <div className={styles.ereferralInfo}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/ereferrals-for-practioers.svg"
              alt="eReferrals information graphic"
              width={348}
              height={335}
              style={{
                maxWidth: "516px",
                height: "auto",
                objectFit: "cover",
                margin: "auto",
              }}
            />
          </div>
          <div className={styles.advancedSearch}>
            <h3>Advanced Provider Search</h3>
            <p>
              Easily locate pathology and radiology providers based on location,
              services offered, or your personal favourites list, allowing you
              to readily identify the most suitable provider for your patient's
              needs.
            </p>
            <Link href="/" className={styles.buttonInterested}>
              I'm interested! <ChevronRightIcon className="btn-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EReferrals;
