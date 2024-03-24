import { blockContent } from "./blockContent";
import { post } from "./post";
import { featuredPost } from "./featuredPost";
import { HomeFaq } from "./home/HomeFaq";
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
import { Benefits } from "./products/practicionners/Benefits";
import { PractitionersFaq } from "./products/practicionners/PractitionersFaq";
import { Testimonial } from "./Testimonial";

import { PatiensHero } from "./products/patients/PatientsHero";
import { ReferralSection } from "./products/patients/ReferralSection";
import { PatientsFeatureContent } from "./products/patients/PatientsFeaturesContent";
import { PatientsKeyFeature } from "./products/patients/PatientsKeyFeature";
import { PatientsBenefits } from "./products/patients/PatientsBenefits";
import { PatientsFaq } from "./products/patients/PatientsFaq";
import { PatientDemoSection } from "./products/patients/PatientDemoSection";

export const schema = {
  types: [
    post,
    blockContent,
    featuredPost,
    HomeFaq,
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
    Benefits,
    PatientsBenefits,
    PractitionersFaq,
    PatientsFaq,
    PatientDemoSection,
  ],
};
