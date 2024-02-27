import React from "react";
import styles from "../styles/TestimonialCard.module.css";
import Image from "next/image";

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
      <p className={styles.quote}>{quote}</p>
      <div className={styles.profile}>
        <Image
          src={imageSrc}
          alt={altText}
          className={styles.profileImage}
          height={55}
          width={55}
        />
        <div className={styles.profileText}>
          <p className={styles.name}>{name}</p>
          <div>
            <p className={styles.title}>{role} at {affiliation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
