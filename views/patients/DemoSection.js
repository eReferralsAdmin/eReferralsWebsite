import React from "react";
import styles from "./DemoSection.module.css";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const DemoSection = () => {
  return (
    <div className={styles.demoSection}>
      <div className={styles.imageWrapper}>
        <img
          src={"/images/demo-mobile.svg"}
          alt="Demo Laptop"
          className={styles.demoImage}
        />
      </div>
      <div className={styles.demoInfo}>
        <h2 className={styles.title}>Book a Free Demo Today</h2>
        <p className={styles.description}>
          This chapter introduces the topic of error as an essential foundation
          for an understanding of patient safety. We introduce psychological
          classifications of error and then, using clinical examples
        </p>
        <Link href={"/"} className={`${styles.ctaButton}`}>
          Book a free demo! <ChevronRightIcon className="btn-icon" />
        </Link>
      </div>
    </div>
  );
};

export default DemoSection;
