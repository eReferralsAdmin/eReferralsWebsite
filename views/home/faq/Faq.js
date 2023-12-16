import styles from "./FaqSection.module.css";
import Accordion from "../../../components/Accordion";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Faq = () => {
  return (
    <section className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      <Accordion
        title={"What is Mobile app development?"}
        description={
          "It’s the creation of digital system that are tailored for mobile devices. Now more than ever the world needs to be mobilised with their business and systems and Mobile app development is the most relevant path to take. As per any other Application Development, the process is to gather requirements, define functionalities, design, build, deliver and support these mobile apps tailored for the business purpose."
        }
      />
      <Accordion
        title={"Why is Mobile app development important?"}
        description={
          "It’s the creation of digital system that are tailored for mobile devices. Now more than ever the world needs to be mobilised with their business and systems and Mobile app development is the most relevant path to take. As per any other Application Development, the process is to gather requirements, define functionalities, design, build, deliver and support these mobile apps tailored for the business purpose."
        }
      />
      <Accordion
        title={"How much does developing a Mobile app cost?"}
        description={
          "It’s the creation of digital system that are tailored for mobile devices. Now more than ever the world needs to be mobilised with their business and systems and Mobile app development is the most relevant path to take. As per any other Application Development, the process is to gather requirements, define functionalities, design, build, deliver and support these mobile apps tailored for the business purpose."
        }
      />
      <Link href="/" className={styles.askQuestion}>
        Ask a question <ChevronRightIcon className="btn-icon" />
      </Link>
    </section>
  );
};

export default Faq;
