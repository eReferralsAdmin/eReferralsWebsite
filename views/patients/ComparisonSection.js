import React from "react";
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

const ComparisonSection = () => {
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
        <p>Paper form. Slow to fill and follow</p>
      </div>
      <div className={styles.sliderContainer}>
        <ReactCompareSlider
          style={{
            overflow: "visible",
          }}
          handle={<CustomHandle />}
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
  );
};

export default ComparisonSection;
