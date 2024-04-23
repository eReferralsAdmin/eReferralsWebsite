"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./CollaborationFeature.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

const CollaborationFeature = ({ collaborations }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    const prevSlide =
      currentSlide === 0 ? collaborations.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  const goToNextSlide = () => {
    const nextSlide =
      currentSlide === collaborations.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  const { productImage, description, collaborationLogo } =
    collaborations[currentSlide];

  return (
    <div className={styles.collaborationFeature}>
      <h2 className={styles.collaborationFeatureTitle}>
        In collaboration with
      </h2>
      {collaborations.length > 0 && ( // Check if there are collaborations before rendering
        <div key={currentSlide} className={`${styles.collaborationContent}`}>
          <div className={styles.collaborationDetails}>
            <div className={styles.brandLogo}>
              <Image
                src={urlForImage(collaborationLogo)}
                alt="Brand Logo"
                width={321}
                height={137}
              />
            </div>
            <PortableText value={description} />
            <p className={styles.collaborationText}></p>
            <div className={styles.carouselControls}>
              <div className={styles.mobileCarouselControls}>
                <button
                  aria-label="Previous slide"
                  className={styles.carouselControlButton}
                  onClick={goToPreviousSlide}
                >
                  <ChevronLeftIcon className={styles.carouselControlIcon} />
                </button>
                <button
                  aria-label="Next slide"
                  className={styles.carouselControlButton}
                  onClick={goToNextSlide}
                >
                  <ChevronRightIcon className={styles.carouselControlIcon} />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.productImage}>
            <Image
              src={urlForImage(productImage)}
              alt="Product Image"
              height={450}
              width={249}
              className={styles.collaboratorProductMobile}
            />
            <Image
              src={urlForImage(productImage)}
              alt="Product Image"
              width={249}
              height={450}
              className={styles.collaboratorProductDesktop}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CollaborationFeature;
