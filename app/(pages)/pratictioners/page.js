import React from "react";
import HeroSection from "../../../views/patients/HeroSection";
import FeaturesSection from "../../../views/patients/GraphSection";
import KeyFeatures from "../../../views/patients/KeyFeatures";
import DemoSection from "../../../views/patients/DemoSection";
import Faq from "../../../components/faq/Faq";
import CommparisonSection from "../../../views/patients/ComparisonSection";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import styles from "./pratictioners.module.css";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/practitioners`);

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const {
    inventorySectionContent,
    practitionersFeature,
    demoSectionContent,
    testimonials,
    features,
    hero,
    benefits,
    faqs,
  } = await getData();

  return (
    <main className={styles.main}>
      <HeroSection hero={hero} />
      <FeaturesSection benefits={benefits} data={inventorySectionContent} />
      {/* <KeyFeatures data={practitionersFeature} features={features} /> */}
      <RecommendationSection testimonials={testimonials} />
      <CommparisonSection
        beforeImage={"/before-app-paper.png"}
        afterImage={"/after-app-paper.png"}
      />
      <DemoSection data={demoSectionContent} />
      <div className={"faqContainer"}>
        <Faq faqs={faqs} />
      </div>
    </main>
  );
};

export default page;
