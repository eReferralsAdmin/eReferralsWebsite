import React from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="/images/dashboard-top1.png"
            alt="Top Image"
            className={styles.topImage}
          />

          <div className={styles.bottomImages}>
            <img src="/images/dashboard-left.svg" alt="Bottom Left Image" />
            <img src="/images/dashboard-right.svg" alt="Bottom Right Image" />
          </div>
        </div>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <img src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className={styles.headerContent}>
            <p>for</p>
            <h1>Pratictioners</h1>
          </div>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p className={styles.heroDescription}>
              Modern web application that allows referrals to be sent and
              received seamlessly between healthcare professionals
            </p>
            <Link
              href={"/pratictioners-signup"}
              className={`${styles.submitButton}`}
            >
              Sign Up <ChevronRightIcon className="btn-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
