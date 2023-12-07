import React from "react";
import styles from "./hero.module.css";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <section className={styles.heroSection}>
        <div className={styles.imageContainer}></div>
        <div className={styles.contentContainer}>
          <h1>
            Connecting doctors and patients to pathology and radiology providers
            around Australia.
          </h1>
          <p>
            eReferrals' vision is to revolutionise healthcare in Australia by
            seamlessly connecting doctors and patients with premier pathology
            and radiology providers. Our aim is to provide a software solution
            that is reliable, efficient, and secure to optimise doctors' time
            and simplify the referral process for patients.
          </p>
          <div className={styles.buttonsContainer}>
            <Link href="/" className={`btn-primary`}>
              I'm interested! <ChevronRightIcon className="btn-icon" />
            </Link>
            <Link href="/" className={styles.buttonLearnMore}>
              Learn more <i className="ri-search-line"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
