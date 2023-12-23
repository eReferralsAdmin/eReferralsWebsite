import React from "react";
import styles from "../styles/FeatureCard.module.css";

const FeatureCard = () => {
  return (
    <div className={styles.featureItem}>
      <img
        src={"/images/dashboard.svg"}
        alt="Key Feature"
        className={styles.icon}
      />
      <div>
        <h3 className={styles.featureTitle}>Key Feature</h3>
        <p className={styles.featureDescription}>
          This chapter introduces the topic of error as an essential foundation
          for an understanding of patient safety.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
