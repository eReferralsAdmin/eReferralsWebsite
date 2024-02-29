"use client";
import styles from "./KeyFeatures.module.css";
import FeatureCard from "../../components/FeatureCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const KeyFeatures = ({ data, features }) => {
  return (
    <div className={styles.featuresSection}>
      <div className={styles.keyFeatures}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
      </div>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
      <div className={styles.featuresSlider}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.4}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1.4,
            },
            640: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 2.7,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <FeatureCard feature={feature} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default KeyFeatures;
