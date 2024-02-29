import React from "react";
import styles from "./Features.module.css";
import Image from "next/image";

const Features = ({data}) => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>
          {data.description}
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={"/patient/features.svg"}
          fill
          alt=""
          className={styles.featuresImage}
        />
      </div>
      <div className={styles.featuresSection}>
        <div className={styles.feature}>
          <img src="/icons/dashboard.svg" alt="Easy management" />
          <p>Easy management</p>
        </div>
        <div className={styles.feature}>
          <img src={"/icons/energy.svg"} alt="Increase Hospital Efficiency" />
          <p>Fast prenotation</p>
        </div>
        <div className={styles.feature}>
          <img src="/icons/support.svg" alt="24/7 Live Support" />
          <p>24/7 Live Support</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
