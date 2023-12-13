import React from "react";
import Image from "next/image";
import styles from "./CollaborationFeature.module.css"; // Ensure the module CSS path is correct
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const CollaborationFeature = () => {
  return (
    <div className={styles.collaborationFeature}>
      <h2 className={styles.collaborationFeatureTitle}>
        In collaboration with
      </h2>
      <div className={`${styles.collaborationContent}`}>
        <div className={styles.collaborationDetails}>
          <div className={styles.brandLogo}>
            <Image
              src="/images/collaboration-brand-logo.svg"
              alt="Brand Logo"
              width={321}
              height={137}
            />
          </div>
          <p className={styles.collaborationText}>
            Richard and his team's technical capabilities to deliver
            functionality on time and assist with the business execution has
            proven to be a great investment from an ROI perspective.
          </p>
          <div className={styles.carouselControls}>
            <button
              aria-label="Previous slide"
              className={styles.carouselControlButton}
            >
              <ChevronLeftIcon className={styles.carouselControlIcon} />
            </button>
            <button
              aria-label="Next slide"
              className={styles.carouselControlButton}
            >
              <ChevronRightIcon className={styles.carouselControlIcon} />
            </button>
          </div>
        </div>
        <div className={styles.productImage}>
          <Image
            src="/images/collaborator-product-mobile.svg"
            alt="Product Image"
            height={450}
            width={249}
            className={styles.collaboratorProductMobile}
          />
          <Image
            src="/images/collaborator-product-desktop.svg"
            alt="Product Image"
            width={249}
            height={450}
            className={styles.collaboratorProductDesktop}
          />
        </div>
      </div>
    </div>
  );
};

export default CollaborationFeature;
