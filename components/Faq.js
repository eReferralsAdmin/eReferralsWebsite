import styles from "../styles/FaqComponent.module.css";
import Accordion from "./Accordion";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Faq = ({ faqs }) => {
  return (
    <section className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      {faqs.map(({ title, description }, index) => (
        <Accordion key={index} title={title} description={description} />
      ))}
      <Link href="/contact" className={styles.askQuestion}>
        Ask a question <ChevronRightIcon className="btn-icon" />
      </Link>
    </section>
  );
};

export default Faq;
