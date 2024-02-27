import { blockContent } from "./blockContent";
import { post } from "./post";
import { featuredPost } from "./featuredPost";
import { Faq } from "./faq";
import { Hero } from "./home/Hero";
import { ForPractitioners, ForPatients } from "./home/eReferrals";
import { NewsletterSubscription } from "./home/NewsletterSubscription";
import { OpinionSurvey } from "./home/OpinionSurvey";
import { Collaboration } from "./home/Collaboration";
import { PractitionersHero } from "./products/practicionners/PracticionersHero";
import { InventorySection } from "./products/practicionners/InventorySection";
import { DemoSection } from "./products/practicionners/DemoSection";
import { PracticionersKeyFeature } from "./products/practicionners/PracticionersKeyFeature";
import { PracticionersFeatureContent } from "./products/practicionners/PracticionersFeaturesContent";
import { Testimonial } from "./Testimonial";

import { PatiensHero } from "./products/patients/PatientsHero";
import { ReferralSection } from "./products/patients/ReferralSection";
import { PatientsFeatureContent } from "./products/patients/PatientsFeaturesContent";
import { PatientsKeyFeature } from "./products/patients/PatientsKeyFeature";

export const schema = {
  types: [
    post,
    blockContent,
    featuredPost,
    Faq,
    Hero,
    ForPractitioners,
    ForPatients,
    NewsletterSubscription,
    OpinionSurvey,
    Collaboration,
    PractitionersHero,
    InventorySection,
    DemoSection,
    Testimonial,
    PracticionersKeyFeature,
    PracticionersFeatureContent,
    PatiensHero,
    ReferralSection,
    PatientsFeatureContent,
    PatientsKeyFeature,
  ],
};
