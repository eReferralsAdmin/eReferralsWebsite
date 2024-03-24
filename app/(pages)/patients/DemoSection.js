import React from "react";
import styles from "./DemoSection.module.css";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const DemoSection = ({ data }) => {
  return (
    <div className={styles.demoSection}>
      <div className={styles.imageWrapper}>
        <Image
          src={"/patient/floating-mobile.webp"}
          alt="Demo Laptop"
          sizes="100%" // Adjust size based on layout preference
          style={{ width: "100%", height: "auto" }} // Adjust style for desired width behavior
          className={styles.demoImage}
          height={670}
          width={984}
        />
      </div>
      <div className={styles.demoInfo}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
        <Link href={"/contact"} className={`${styles.ctaButton}`}>
          Sign Up <ChevronRightIcon className="btn-icon" />
        </Link>
      </div>
    </div>
  );
};

export default DemoSection;
