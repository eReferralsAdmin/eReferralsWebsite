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

async function getFaqs() {
  const res = await fetch(`${process.env.API_URL}/api/faqs`);
  if (!res.ok) {
    throw new Error("Failed to fetch faqs");
  }
  return res.json();
}

export default async function Home() {
  const faqs = await getFaqs();
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
        <div className={styles.faqContainer}>
          <Faq faqs={faqs} />
          <Link href="/contact" className={styles.askQuestion}>
            Ask a question <ChevronRightIcon className="btn-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
