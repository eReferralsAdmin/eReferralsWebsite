import React from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";

const HeroSection = ({ hero }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/dashboard-top1.png"
            alt="Top Image"
            sizes="100vw" // Responsive based on viewport width
            style={{
              width: "80%",
              height: "auto",
            }}
            className={styles.topImage}
            width={608}
            height={432}
          />

          <div className={styles.bottomImages}>
            <Image
              src="/images/dashboard-left.svg"
              alt="Bottom Left Image"
              sizes="90%" // Adjust size based on desired layout
              style={{ width: "90%", height: "auto" }} // Adjust styles as needed
              width={461}
              height={328}
            />
            <Image
              src="/images/dashboard-right.svg"
              alt="Bottom Right Image"
              sizes="90%" // Adjust size based on desired layout
              style={{ width: "90%", height: "auto" }} // Adjust styles as needed
              width={461}
              height={328}
            />
          </div>
        </div>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                sizes="100%"
                style={{ width: "100%", height: "auto" }}
                src="/logo.svg"
                alt="Logo"
                width={515.88}
                height={109.61}
              />
            </Link>
          </div>
          <div className={styles.headerContent}>
          <PortableText value={hero.subtitle} />
          <PortableText value={hero.title} />
          </div>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p className={styles.heroDescription}>
              <PortableText value={hero.description} />
            </p>
            <Link
              href={"/pratictioners-signup"}
              className={`${styles.submitButton}`}
            >
              Sign Up <ChevronRightIcon className="btn-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
