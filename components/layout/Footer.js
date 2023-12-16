import Link from "next/link";
import React from "react";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <p className={styles.footerTitle}>Start with something wonderfull</p>
          <p className={styles.description}>
            Join the over +100 clinics, +3000 patients, and +600 professionals
            in the digital revolution of the medical report management world.
          </p>
          <Link href={"#"} className={styles.chatButton}>
            Chat to us
          </Link>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copy}>
            <p>© 2024 eReferrals. All rights reserved.</p>
          </div>
          <Image
            src="/logo-light.svg"
            alt="logo-light"
            width={198}
            height={42}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
