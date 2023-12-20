import Hero from "../../views/home/hero/Hero";
import DashboardView from "../../views/home/dashboard-view/DashboardView";
import EReferrals from "../../views/home/ereferrals/EReferrals";
import NewsletterSignup from "../../views/home/nwsletter/NewsletterSignup";
import SurveyInvitationCard from "../../views/home/survey/SurveyInvitationCard";
import CollaborationFeature from "../../views/home/collaboration/CollaborationFeature";
import Signup from "../../views/home/signup/Signup";
import Faq from "../../components/Faq";

const faqs = [
  {
    title: "What is Mobile app development?",
    description:
      "It’s the creation of digital system that are tailored for mobile devices. Now more than ever the world needs to be mobilised with their business and systems and Mobile app development is the most relevant path to take. As per any other Application Development, the process is to gather requirements, define functionalities, design, build, deliver and support these mobile apps tailored for the business purpose.",
  },
];

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <Hero />
        <DashboardView />
        <div id="learn-more">
          <EReferrals />
        </div>
        <NewsletterSignup />
        <SurveyInvitationCard />
        <CollaborationFeature />
        <div id="signup">
          <Signup />
        </div>
        <Faq faqs={faqs} />
      </div>
    </div>
  );
}
