import React from "react";
import styles from "../styles/TestimonialCard.module.css";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const TestimonialCard = ({
  quote,
  imageSrc,
  altText,
  name,
  role,
  affiliation,
}) => {
  return (
    <div className={styles.testimonialCard}>
      <p className={styles.quote}><PortableText value={quote} /></p>
      <div className={styles.profile}>
        <Image
          src={imageSrc}
          alt={altText}
          className={styles.profileImage}
          height={55}
          width={55}
        />
        <div className={styles.profileText}>
          <p className={styles.name}><PortableText value={name} /></p>
          <div>
            <p className={styles.title}><PortableText value={role} /> at <PortableText value={affiliation} /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
