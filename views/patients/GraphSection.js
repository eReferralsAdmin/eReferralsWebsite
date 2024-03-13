import React from "react";
import styles from "./GraphSection.module.css";
import Image from "next/image";

const GraphSection = ({ data }) => {
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
        <div className={styles.feature}>
          <Image
            width={30}
            height={30}
            src="/icons/dashboard.svg"
            alt="Easy management"
          />
          <p>Easy management</p>
        </div>
        <div className={styles.feature}>
          <Image
            width={30}
            height={30}
            src={"/icons/energy.svg"}
            alt="Increase Hospital Efficiency"
          />
          <p>Increase Hospital Efficiency</p>
        </div>
        <div className={styles.feature}>
          <Image
            height={30}
            width={30}
            src="/icons/support.svg"
            alt="24/7 Live Support"
          />
          <p>24/7 Live Support</p>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
