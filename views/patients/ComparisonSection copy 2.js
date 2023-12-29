import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import styles from "./Comparison.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ComparisonSection = () => {
  return (
    <div className={styles.comparisonSection}>
      <div className={styles.comparisonContentMobile}>
        <div className={styles.before}>
          <div className={styles.beforeHeader}>
            <h2>Before</h2>
            <ChevronLeftIcon className="btn-icon" />
          </div>
          <p>Paper form. Slow to fill and follow</p>
        </div>
        <div className={styles.after}>
          <div className={styles.afterHeader}>
            <ChevronRightIcon className="btn-icon" />
            <h2>After</h2>
          </div>
          <p>Easy to fill and navigate, better section flow</p>
        </div>
      </div>
      <div className={styles.imageComparisonContainer}>
        <div
          className={`${styles.comparisonSection} ${styles.comparisonBefore}`}
        >
          <div className={styles.before}>
            <div className={styles.beforeHeader}>
              <h2>Before</h2>
              <ChevronLeftIcon className="btn-icon" />
            </div>
            <p>Paper form. Slow to fill and follow</p>
          </div>
        </div>
        <div
          className={`${styles.comparisonSection} ${styles.comparisonAfter}`}
        >
          <div className={styles.after}>
            <div className={styles.afterHeader}>
              <ChevronRightIcon className="btn-icon" />
              <h2>After</h2>
            </div>
            <p>Easy to fill and navigate, better section flow</p>
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <ReactCompareSlider
            itemOne={
              <div className={styles.sliderWrapperBefore}>
                <ReactCompareSliderImage
                  src="/images/before.png"
                  alt="Image one"
                />
              </div>
            }
            itemTwo={
              <div className={styles.sliderWrapperAfter}>
                <ReactCompareSliderImage
                  src="/images/after.png"
                  alt="Image two"
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
