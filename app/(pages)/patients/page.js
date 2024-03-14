import HeroSection from "./HeroSection";
import Features from "./Features";
import KeyFeatres from "../../../views/patients/KeyFeatures";
import ComparisonSection from "../../../views/patients/ComparisonSection";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import Faq from "../../../components/faq/Faq";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/home`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const { keyFeatures, keyFeaturesContent, testimonials, referralSection } =
    await getData();

  return (
    <div>
      <HeroSection />
      <Features data={referralSection} />
      <KeyFeatres data={keyFeaturesContent} features={keyFeatures} />
      <ComparisonSection
        beforeImage={"/before-app-paper.png"}
        afterImage={"/after-app-mobile.png"}
      />
      <RecommendationSection testimonials={testimonials} />
      <div className={"faqContainer"}>
        <Faq />
      </div>
    </div>
  );
};

export default page;
