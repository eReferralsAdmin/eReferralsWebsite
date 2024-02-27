import React from "react";
import styles from "./GraphSection.module.css";

const GraphSection = ({ data }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContent}>
        <div className={styles.graphSection}>
          <div className={styles.imageContainer}>
            <img
              src="/images/graph-mobile.svg"
              alt="Graph"
              className={styles.graphImageMobile}
            />
            <img
              src="/images/graph-desktop.svg"
              alt="Graph"
              className={styles.graphImageDesktop}
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
          <img src="/icons/dashboard.svg" alt="Easy management" />
          <p>Easy management</p>
        </div>
        <div className={styles.feature}>
          <img src={"/icons/energy.svg"} alt="Increase Hospital Efficiency" />
          <p>Increase Hospital Efficiency</p>
        </div>
        <div className={styles.feature}>
          <img src="/icons/support.svg" alt="24/7 Live Support" />
          <p>24/7 Live Support</p>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
