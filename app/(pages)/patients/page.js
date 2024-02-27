import HeroSection from "./HeroSection";
import Features from "./Features";
import KeyFeatres from "../../../views/patients/KeyFeatures";
import ComparisonSection from "../../../views/patients/ComparisonSection";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import Faq from "../../../components/faq/Faq";
import { fetchFAQs } from "../../../lib/fetchData";

const page = async () => {
  const faqs = await fetchFAQs();
  return (
    <div>
      <HeroSection />
      <Features />
      <KeyFeatres />
      <ComparisonSection
        beforeImage={"/before-app-paper.png"}
        afterImage={"/after-app-mobile.png"}
      />
      <RecommendationSection />
      <div className={"faqContainer"}>
        <Faq faqs={faqs} />
      </div>
    </div>
  );
};

export default page;
