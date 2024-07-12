import Link from "next/link";
import React from "react";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <p className={styles.footerTitle}>Questions or Concerns?</p>
          <p className={styles.description}>
            Whether you have any questions or need any help,<br></br>feel free to chat to us or send us an email at<br></br><strong>info@ereferrals.health</strong>
          </p>
          <Link href={"/contact"} className={styles.chatButton}>
            Contact us
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
