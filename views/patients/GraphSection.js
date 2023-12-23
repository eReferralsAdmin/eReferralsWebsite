import React from "react";
import styles from "./GraphSection.module.css";

const GraphSection = () => {
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
          <h1>Manage your hospital inventory easily</h1>
          <p>
            This chapter introduces the topic of error as an essential
            foundation for an understanding of patient safety. We introduce
            psychological classifications of error and then, using clinical
            examples
          </p>
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
