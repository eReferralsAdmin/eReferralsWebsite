import React from "react";
import styles from "../styles/FeatureCard.module.css";
import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import { PortableText } from "@portabletext/react";


const FeatureCard = ({ feature }) => {
  return (
    <div className={styles.featureItem}>
      <Image
        width={30}
        height={30}
        // src={"/images/dashboard.svg"}
        src={urlForImage(feature?.icon)}
        alt="Key Feature"
        className={styles.icon}
      />
      <div>
        <h3 className={styles.featureTitle}>
          {/* {feature.title} */}
          <PortableText value={feature.title} />
          </h3>
        <p className={styles.featureDescription}>
          {/* {feature.description} */}
          <PortableText value={feature.description} />
          </p>
      </div>
    </div>
  );
};

export default FeatureCard;
