import Hero from "../../views/home/hero/Hero";
import DashboardView from "../../views/home/dashboard-view/DashboardView";
import EReferrals from "../../views/home/ereferrals/EReferrals";
import NewsletterSignup from "../../views/home/nwsletter/NewsletterSignup";
import SurveyInvitationCard from "../../views/home/survey/SurveyInvitationCard";
import CollaborationFeature from "../../views/home/collaboration/CollaborationFeature";
import Signup from "../../views/home/signup/Signup";
import Faq from "../../components/faq/Faq";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import styles from "./page.module.css";
export const revalidate = 10;

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/home`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const {
    homeHero,
    forPractitionersHome,
    forPatientsHome,
    newsletterSubscriptionContent,
    opinionSurvey,
    collaborations,
    homeFaqs,
  } = await getData();

  return (
    <div className="wrapper">
      {/* <div className="container">
        <Hero data={homeHero} />
        <DashboardView />
        <div id="learn-more">
          <EReferrals
            practitionersData={forPractitionersHome}
            patientsData={forPatientsHome}
          />
        </div>
        <NewsletterSignup content={newsletterSubscriptionContent} />
        <SurveyInvitationCard data={opinionSurvey} />
        <CollaborationFeature collaborations={collaborations} />
        <div id="signup">
          <Signup />
        </div>
        <div className={styles.faqContainer}>
          <Faq faqs={homeFaqs} />
          <Link href="/contact" className={styles.askQuestion}>
            Ask a question <ChevronRightIcon className="btn-icon" />
          </Link>
        </div>
      </div> */}
    </div>
  );
}
