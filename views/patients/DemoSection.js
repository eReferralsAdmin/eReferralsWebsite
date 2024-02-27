import React from "react";
import styles from "./DemoSection.module.css";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const DemoSection = ({ data }) => {
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
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
        <Link href={"/contact"} className={`${styles.ctaButton}`}>
          Book a free demo! <ChevronRightIcon className="btn-icon" />
        </Link>
      </div>
    </div>
  );
};

export default DemoSection;
