import React from "react";
import HeroSection from "../../../views/patients/HeroSection";
import FeaturesSection from "../../../views/patients/GraphSection";
import KeyFeatures from "../../../views/patients/KeyFeatures";
import DemoSection from "../../../views/patients/DemoSection";
import Faq from "../../../components/faq/Faq";
import CommparisonSection from "../../../views/patients/ComparisonSection";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import styles from "./pratictioners.module.css";

const page = () => {
  return (
    <main className={styles.main}>
      <HeroSection />
      <FeaturesSection />
      <KeyFeatures />
      <RecommendationSection />
      <CommparisonSection
        beforeImage={"/images/before-p.png"}
        afterImage={"/images/after.png"}
      />
      <DemoSection />
      <div className={"faqContainer"}>
        <Faq />
      </div>
    </main>
  );
};

export default page;
