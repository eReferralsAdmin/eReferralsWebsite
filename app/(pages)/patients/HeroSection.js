import Image from "next/image";
import React from "react";
import Logo from "../../../components/layout/Logo";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";


const HeroSection = ({ hero }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <Image
          src="/patient/patient-app.svg"
          fill
          alt="logo"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroHeader}>
        <Logo />
        <div className={styles.headings}>
          <h1 className={styles.subTitle}>
          <PortableText value={hero.subtitle} />
            {/* {hero.subtitle} */}
            </h1>
          <h1 className={styles.mainTitle}>
          <PortableText value={hero.title} />
            {/* {hero.title} */}
            </h1>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.description}>
        <PortableText value={hero.description} />
          {/* {hero.description} */}
          </p>
      </div>
      <div className={styles.cta}>
        <Link href={"/pratictioners-signup"} className={styles.ctaButton}>
          <span>Sign Up</span>
          <ChevronRightIcon className="chevronRightIcon" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
