"use client";
import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import styles from "./Comparison.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const CustomHandle = () => {
  return (
    <div className={styles.customHandle}>
      <div className={styles.icons}>
        <ChevronLeftIcon
          className={`${styles.handleIcon}`}
          // className={`${styles.handleIcon} ${styles.leftIcon}`}
        />
        <ChevronRightIcon
          className={`${styles.handleIcon}`}
          // className={`${styles.handleIcon} ${styles.rightIcon}`}
        />
      </div>
      <div className={styles.handleLine}></div>
    </div>
  );
};

const ComparisonSection = ({ beforeImage, afterImage }) => {
  const [handlePosition, setHandlePosition] = useState(50);

  // Calculate clipPath value based on handle position
  const clipPathValue = `inset(0% ${100 - handlePosition}% 0% 0%)`;
  return (
    <div className={styles.comparisonSection}>
      <div className={`${styles.beforeContent} ${styles.content}`}>
        <div className={`${styles.beforeHeader} ${styles.header}`}>
          <h2>Before</h2>
          <ChevronLeftIcon className={styles.icon} />
        </div>
        <p>Paper form. Slow to fill and follow</p>
      </div>
      <div className={`${styles.afterContent} ${styles.content}`}>
        <div className={`${styles.afterHeader} ${styles.header}`}>
          <ChevronRightIcon className={styles.icon} />
          <h2>After</h2>
        </div>
        <p>Digital Form- Automated and Easy</p>
      </div>
      <div className={styles.sliderContainer}>
        <ReactCompareSlider
          onPositionChange={(position) => setHandlePosition(position)}
          style={{
            overflow: "visible",
          }}
          handle={<CustomHandle />}
          itemOne={
            <div className={styles.sliderWrapperBefore}>
              <ReactCompareSliderImage
                src={beforeImage}
                alt="Before Image"
                style={{
                  clipPath: clipPathValue, // Use dynamic clipPath value
                }}
              />
            </div>
          }
          itemTwo={
            <div className={styles.sliderWrapperAfter}>
              <ReactCompareSliderImage src={afterImage} alt="After Image" />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ComparisonSection;
