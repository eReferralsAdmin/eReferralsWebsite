import HeroSection from "./HeroSection";
import Features from "./Features";
import KeyFeatres from "../../../views/patients/KeyFeatures";
import ComparisonSection from "../../../views/patients/ComparisonSection";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import Faq from "../../../components/faq/Faq";
import DemoSection from "./DemoSection";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/patients`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const {
    keyFeatures,
    keyFeaturesContent,
    testimonials,
    referralSection,
    patientHero,
    patientBenefits,
    faqs,
    demoSectionContent,
  } = await getData();

  return (
    <div>
      <HeroSection hero={patientHero} />
      <Features benefits={patientBenefits} data={referralSection} />
      <KeyFeatres data={keyFeaturesContent} features={keyFeatures} />
      <ComparisonSection
        beforeImage={"/before-app-paper.png"}
        afterImage={"/after-app-mobile.png"}
      />
      <RecommendationSection testimonials={testimonials} />
      <DemoSection data={demoSectionContent} />
      <div className={"faqContainer"}>
        <Faq faqs={faqs} />
      </div>
    </div>
  );
};

export default page;
