"use client";
import React from "react";
import { Navigation, EffectCoverflow, Scrollbar, A11y } from "swiper/modules";
import TestimonialCard from "../../components/TestimonialCard";
import styles from "./RecommendationSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "swiper/css/navigation";
import { urlForImage } from "../../sanity/lib/image";

const recommendations = [
  {
    quote:
      "“This chapter introduces the topic of error as an essential foundation for an understanding of patient safety. We introduce...",
    imageUrl: "/images/test1.png",
    name: "Dr. John Doe",
    title: "Surgeon at Sydney Clinic",
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

const RecommendationSection = ({ testimonials }) => {
  return (
    <section className={styles.recommendationContainer}>
      <h2>Recommended by Medics</h2>
      <div className={styles.testimonialsContainer}>
        <Swiper
          className={styles.testimonialsContent}
          // effect={"coverflow"}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 300,
          //   modifier: 1,
          //   slideShadows: false,
          //   slidesPerView: 1.4,
          // }}
          slidesPerView={1.4}
          spaceBetween={27}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2.4,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, EffectCoverflow]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className={styles.slideCard} key={index}>
              <TestimonialCard
                key={index}
                quote={testimonial.testimonialText}
                imageSrc={urlForImage(testimonial.authorImage)}
                altText={testimonial.authorName}
                name={testimonial.authorName}
                affiliation={testimonial.authorAffiliation}
                role={testimonial.authorRole}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperNav}>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      <div className={styles.bg}></div>
    </section>
  );
};

export default RecommendationSection;
