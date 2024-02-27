"use client";
import styles from "./KeyFeatures.module.css";
import FeatureCard from "../../components/FeatureCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const KeyFeatures = ({ data }) => {
  return (
    <div className={styles.featuresSection}>
      <div className={styles.keyFeatures}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
      </div>
      <div className={styles.featuresGrid}>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
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
          <SwiperSlide>
            <FeatureCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default KeyFeatures;
