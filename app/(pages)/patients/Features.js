import React from "react";
import styles from "./Features.module.css";
import Image from "next/image";

const Features = ({ data, benefits }) => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={"/patient/app-features.svg"}
          fill
          alt=""
          className={styles.featuresImage}
        />
      </div>
      <div className={styles.featuresSection}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.feature}>
            <Image
              width={30}
              height={30}
              src="/icons/dashboard.svg"
              // src={urlForImage(benefit?.icon)}
              alt="Easy management"
            />
            <p>{benefit.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
