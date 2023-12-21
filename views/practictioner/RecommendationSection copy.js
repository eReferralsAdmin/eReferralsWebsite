"use client";
import React from "react";

import TestimonialCard from "../../components/TestimonialCard";
import styles from "./RecommendationSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const recommendations = [
  {
    quote: "Excellent resource for understanding patient safety nuances.",
    imageUrl: "/images/test1.png",
    name: "Dr. Jane Smith",
    title: "Cardiologist at HeartCare Clinic",
  },
  {
    quote: "A thorough dive into the procedural standards of care.",
    imageUrl: "/images/test1.png",
    name: "Dr. Emily Doe",
    title: "General Practitioner at Wellness Center",
  },
  {
    quote: "A thorough dive into the procedural standards of care.",
    imageUrl: "/images/test1.png",
    name: "Dr. Emily Doe",
    title: "General Practitioner at Wellness Center",
  },
  {
    quote: "A thorough dive into the procedural standards of care.",
    imageUrl: "/images/test1.png",
    name: "Dr. Emily Doe",
    title: "General Practitioner at Wellness Center",
  },
  {
    quote: "A thorough dive into the procedural standards of care.",
    imageUrl: "/images/test1.png",
    name: "Dr. Emily Doe",
    title: "General Practitioner at Wellness Center",
  },
];

const RecommendationSection = () => {
  return (
    <section className={styles.recommendationContainer}>
      <h2>Recommended by Medics</h2>
      {/* <div className={styles.cardsContainer}>
        <div className={styles.cardsBg}></div>
        <div className={styles.testimonialCards}>
          {recommendations.map((recommendation, index) => (
            <TestimonialCard
              key={index}
              quote={recommendation.quote}
              imageSrc={recommendation.imageUrl}
              altText={recommendation.name}
              name={recommendation.name}
              title={recommendation.title}
            />
          ))}
        </div>
      </div> */}
      <div className={styles.cardsContainer}>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
        >
          {recommendations.map((recommendation, index) => (
            <SwiperSlide>
              <TestimonialCard
                key={index}
                quote={recommendation.quote}
                imageSrc={recommendation.imageUrl}
                altText={recommendation.name}
                name={recommendation.name}
                title={recommendation.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecommendationSection;
