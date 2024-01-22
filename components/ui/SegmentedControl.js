import React, { useState, useEffect } from "react";
import styles from "./SegmentedControl.module.css";
import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/outline";

const SegmentedControl = ({
  options,
  name,
  activeSegment,
  onSegmentChange,
  paddleActive,
}) => {
  const [activeIndex, setActiveIndex] = useState(
    options.findIndex((opt) => opt.value === activeSegment)
  );

  useEffect(() => {
    setActiveIndex(options.findIndex((opt) => opt.value === activeSegment));
  }, [activeSegment, options]);

  const handleOnChange = (newValue) => {
    if (onSegmentChange) {
      onSegmentChange(newValue);
    }
  };

  return (
    <div className={styles.controlsContainer}>
      {options.map((option, index) => {
        const isActive = activeSegment === option.value;
        return (
          <React.Fragment key={option.value}>
            <input
              {...{ [name]: option.value }}
              id={`${name}-${option.value}`}
              type="radio"
              className={styles.hiddenRadio}
              value={option.value}
              checked={isActive}
              onChange={() => onSegmentChange(option.value)}
            />

            <label
              htmlFor={`${name}-${option.value}`}
              className={`${styles.label} ${
                isActive ? styles.labelActive : ""
              }`}
            >
              <CheckIcon className={styles.checkIcon} />
              {option.label}
            </label>
          </React.Fragment>
        );
      })}
      <div
        className={`${styles.paddle} ${
          paddleActive ? styles.paddleActive : styles.paddleInactive
        }`}
        style={{
          left: `${
            (options.findIndex((opt) => opt.value === activeSegment) /
              options.length) *
            100
          }%`,
        }}
      />
    </div>
  );
};

export default SegmentedControl;
