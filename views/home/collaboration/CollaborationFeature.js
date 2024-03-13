"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./CollaborationFeature.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const CollaborationFeature = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      logoSrc: "/images/collaboration-brand-logo.svg",
      text: "Richard and his team's technical capabilities to deliver functionality on time and assist with the business execution has proven to be a great investment from an ROI perspective.",
      productMobileSrc: "/home/collaborator-product-mobile.webp",
      productDesktopSrc: "/home/collaborator-product-desktop.webp",
    },
    {
      logoSrc: "/images/collaboration-brand-logo.svg",
      text: "2. Richard and his team's technical capabilities to deliver functionality on time and assist with the business execution has proven to be a great investment from an ROI perspective.",
      productMobileSrc: "/home/collaborator-product-mobile.webp",
      productDesktopSrc: "/home/collaborator-product-desktop.webp",
    },
  ];

  const goToPreviousSlide = () => {
    const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  const goToNextSlide = () => {
    const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  const { logoSrc, text, productMobileSrc, productDesktopSrc } =
    slides[currentSlide];

  return (
    <div className={styles.collaborationFeature}>
      <h2 className={styles.collaborationFeatureTitle}>
        In collaboration with
      </h2>
      <div className={`${styles.collaborationContent}`}>
        <div className={styles.collaborationDetails}>
          <div className={styles.brandLogo}>
            <Image src={logoSrc} alt="Brand Logo" width={321} height={137} />
          </div>
          <p className={styles.collaborationText}>{text}</p>
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
            src={productMobileSrc}
            alt="Product Image"
            height={450}
            width={249}
            className={styles.collaboratorProductMobile}
          />
          <Image
            src={productDesktopSrc}
            alt="Product Image"
            width={249}
            height={450}
            className={styles.collaboratorProductDesktop}
          />
        </div>
      </div>
    </div>
  );
};

export default CollaborationFeature;
