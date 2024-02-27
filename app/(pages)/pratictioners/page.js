import React from "react";
import HeroSection from "../../../views/patients/HeroSection";
import FeaturesSection from "../../../views/patients/GraphSection";
import KeyFeatures from "../../../views/patients/KeyFeatures";
import DemoSection from "../../../views/patients/DemoSection";
import Faq from "../../../components/faq/Faq";
import CommparisonSection from "../../../views/patients/ComparisonSection";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import styles from "./pratictioners.module.css";
import {
  fetchDemoSection,
  fetchFAQs,
  fetchInventorySection,
  fetchPractitionersFeatureContent,
  fetchTestimonials,
} from "../../../lib/fetchData";
export const revalidate = 10;

const page = async () => {
  const faqs = await fetchFAQs();
  const inventorySectionContent = await fetchInventorySection();
  const practitionersFeatureContent = await fetchPractitionersFeatureContent();
  const demoSectionContent = await fetchDemoSection();
  const testimonials = await fetchTestimonials();
  console.log(testimonials);
  return (
    <main className={styles.main}>
      <HeroSection />
      <FeaturesSection data={inventorySectionContent} />
      <KeyFeatures data={practitionersFeatureContent} />
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
