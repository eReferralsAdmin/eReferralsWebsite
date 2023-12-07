import React from "react";
import styles from "./CollaborationFeature.module.css"; // Import the CSS module

const CollaborationFeature = () => {
  return (
    <div className={styles.collaborationFeature}>
      <h2 className={styles.collaborationFeatureH2}>In collaboration with</h2>

      <div className={styles.collaborationContainer}>
        <div className={styles.collaborationContent}>
          <div className={styles.collaboratorLogo}>
            <img
              src="/images/collaboration-brand-logo.svg"
              alt="Collaborator Logo"
            />
          </div>

          <p className={styles.collaboratorText}>
            Richard and his team's technical capabilities to deliver
            functionality on time and assist with the business execution has
            proven to be a great investment from an ROI perspective.
          </p>

          <div className="carousel-controls">
            <button aria-label="Previous item">&lt;</button>
            <button aria-label="Next item">&gt;</button>
          </div>
        </div>
        <div
          className={styles.productImage}
          style={{
            backgroundImage: "url('/images/collaborator-product-large.png')",
          }}
        >
          <img
            src="/images/collaborator-product-large.png"
            alt="Tangled Hair Conditioning Cream"
          />
        </div>
      </div>
    </div>
  );
};

export default CollaborationFeature;