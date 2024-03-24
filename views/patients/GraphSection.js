import React from "react";
import styles from "./GraphSection.module.css";
import Image from "next/image";

const GraphSection = ({ data, benefits }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContent}>
        <div className={styles.graphSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/graph-mobile.svg"
              alt="Graph - Mobile"
              sizes="100%" // Adjust size based on layout preference
              style={{ width: "100%", height: "auto" }} // Adjust style for desired width behavior
              className={styles.graphImageMobile}
              width={370}
              height={117.15}
            />
            <Image
              src="/images/graph-desktop.svg"
              alt="Graph - Desktop"
              sizes="100%" // Adjust size based on layout preference
              style={{ width: "100%" }} // Adjust style for desired width behavior
              className={styles.graphImageDesktop}
              width={878}
              height={278}
            />
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
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

export default GraphSection;
