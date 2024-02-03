import HeroSection from "./HeroSection";
import Features from "./Features";
import KeyFeatres from "../../../views/patients/KeyFeatures";
import ComparisonSection from "../../../views/patients/ComparisonSection";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import Faq from "../../../components/faq/Faq";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <KeyFeatres />
      <ComparisonSection />
      <RecommendationSection />
      <div className={"faqContainer"}>
        <Faq />
      </div>
    </div>
  );
};

export default page;
