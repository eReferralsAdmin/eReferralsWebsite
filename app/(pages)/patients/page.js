import HeroSection from "./HeroSection";
import Features from "./Features";
import KeyFeatres from "../../../views/patients/KeyFeatures";
import ComparisonSection from "../../../views/patients/ComparisonSection";
import RecommendationSection from "../../../views/practictioner/RecommendationSection";
import Faq from "../../../components/Faq";

const faqs = [
  {
    title: "What is Mobile app development?",
    description:
      "It’s the creation of digital system that are tailored for mobile devices. Now more than ever the world needs to be mobilised with their business and systems and Mobile app development is the most relevant path to take. As per any other Application Development, the process is to gather requirements, define functionalities, design, build, deliver and support these mobile apps tailored for the business purpose.",
  },
];

const page = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <KeyFeatres />
      <ComparisonSection />
      <RecommendationSection />
      <Faq faqs={faqs} />
    </div>
  );
};

export default page;
