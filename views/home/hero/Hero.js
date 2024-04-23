import React from "react";
import styles from "./hero.module.css";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";

const Hero = ({ data }) => {
  return (
    <div className={styles.heroSection}>
      <section className={styles.heroSection}>
        <div className={styles.imageContainer}></div>
        <div className={styles.contentContainer}>
          <PortableText value={data.title} />
          <PortableText value={data.description} />
          <div className={styles.buttonsContainer}>
            <a href="#signup" className={styles.buttonInterested}>
              I&apos;m interested! <ChevronRightIcon className="btn-icon" />
            </a>
            <a href="#learn-more" className={styles.buttonLearnMore}>
              Learn more <MagnifyingGlassIcon className="btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
