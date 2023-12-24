import React from "react";
import HeroSection from "../../../views/patients/HeroSection";
import FeaturesSection from "../../../views/patients/GraphSection";
import KeyFeatures from "../../../views/patients/KeyFeatures";
import DemoSection from "../../../views/patients/DemoSection";
import Faq from "../../../components/Faq";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import styles from "./patients.module.css";

const faqs = [
  {
    title: "What is Mobile app development?",
    description:
      "It’s the creation of digital system that are tailored for mobile devices. Now more than ever the world needs to be mobilised with their business and systems and Mobile app development is the most relevant path to take. As per any other Application Development, the process is to gather requirements, define functionalities, design, build, deliver and support these mobile apps tailored for the business purpose.",
  },
];

const page = () => {
  return (
    <main className={styles.main}>
      <HeroSection />
      <FeaturesSection />
      <KeyFeatures />
      <RecommendationSection />
      <DemoSection />
      <Faq faqs={faqs} />
    </main>
  );
};

export default page;
