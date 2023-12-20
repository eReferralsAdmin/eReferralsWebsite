"use client";
import React, { useEffect } from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "../styles/RecommendationSlider.module.css";

register();

const RecommendationSlider = () => {
  return (
    <swiper-container
      slides-per-view="auto"
      loop
      autoplay
      autoplay-timeout="1"
      autoplay-hover-pause="true"
      effect="coverflow"
      grap-cursor="true"
      centered-slides="true"
      cover-flow-effect=""
      className={styles.swiperContainer}
    >
      <swiper-slide className={styles.swiperSlide}>
        <div className={styles.card}>
          <p className={styles.quote}>
            “This chapter introduces the topic of error as an essential
            foundation for an understanding of patient safety. We introduce...
          </p>
          <div className={styles.profile}>
            <Image
              src="/images/test1.png"
              alt="Dr. John Doe"
              className={styles.profileImage}
              height={55}
              width={55}
            />
            <div className={styles.profileText}>
              <p className={styles.name}>Dr. John Doe</p>
              <p className={styles.title}>Surgeon at Sydney Clinic</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide className={styles.swiperSlide}>
        <div className={styles.card}>
          <p className={styles.quote}>
            “This chapter introduces the topic of error as an essential
            foundation for an understanding of patient safety. We introduce...
          </p>
          <div className={styles.profile}>
            <Image
              src="/images/test1.png"
              alt="Dr. John Doe"
              className={styles.profileImage}
              height={55}
              width={55}
            />
            <div className={styles.profileText}>
              <p className={styles.name}>Dr. John Doe</p>
              <p className={styles.title}>Surgeon at Sydney Clinic</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>

    // <div className={styles.sliderContainer}>
    //   <div className={styles.card}>
    //     <p className={styles.quote}>
    //       “This chapter introduces the topic of error as an essential foundation
    //       for an understanding of patient safety. We introduce...
    //     </p>
    //     <div className={styles.profile}>
    //       <Image
    //         src="/images/test1.png"
    //         alt="Dr. John Doe"
    //         className={styles.profileImage}
    //         height={55}
    //         width={55}
    //       />
    //       <div className={styles.profileText}>
    //         <p className={styles.name}>Dr. John Doe</p>
    //         <p className={styles.title}>Surgeon at Sydney Clinic</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RecommendationSlider;
