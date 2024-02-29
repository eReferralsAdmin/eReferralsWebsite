import HeroSection from "./HeroSection";
import Features from "./Features";
import KeyFeatres from "../../../views/patients/KeyFeatures";
import ComparisonSection from "../../../views/patients/ComparisonSection";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import Faq from "../../../components/faq/Faq";
import {
  fetchPatientsFeatureContent,
  fetchPatientsKeyFeature,
  fetchTestimonials,
  fetchReferralSection,
} from "../../../lib/fetchData";

const page = async () => {
  const keyFeatures = await fetchPatientsKeyFeature();
  const keyFeaturesContent = await fetchPatientsFeatureContent();
  const testimonials = await fetchTestimonials();
  const referralSection = await fetchReferralSection();

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
