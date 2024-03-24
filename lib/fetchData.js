// lib/fetchData.js
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export async function fetchPosts(startIndex = 0, endIndex = 2) {
  const query = groq`*[_type=='post'] | order(publishedAt desc) [${startIndex}...${
    startIndex + endIndex
  }]{
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    readingTime
  }`;
  const posts = await client.fetch(query);
  return posts;
}

export async function fetchFeaturedPost() {
  const featuredPostQuery = `*[_type == "featuredPost"][0]{
    title,
    overview,
    slug,
    mainImage,
    body,
    publishedAt,
    readingTime
  }`;

  return await client.fetch(featuredPostQuery);
}

export async function fetchFAQs() {
  const faqQuery = groq`*[_type == "faq"]{
    _id,
    question,
    answer
  }`;

  const faqs = await client.fetch(faqQuery);
  return faqs;
}

export async function fetchHomeFAQs() {
  const faqQuery = groq`*[_type == "homeFaq"]{
    _id,
    question,
    answer
  }`;

  const faqs = await client.fetch(faqQuery);
  return faqs;
}

export async function fetchPractitionersFAQs() {
  const faqQuery = groq`*[_type == "practitionersFaq"]{
    _id,
    question,
    answer
  }`;

  const faqs = await client.fetch(faqQuery);
  return faqs;
}

export async function fetchPatientsFAQs() {
  const faqQuery = groq`*[_type == "patientsFaq"]{
    _id,
    question,
    answer
  }`;

  const faqs = await client.fetch(faqQuery);
  return faqs;
}

export async function fetchHomeHero() {
  const heroQuery = groq`*[_type == "hero"][0]{
    _id,
    title,
    description,
  }`;

  return await client.fetch(heroQuery);
}

export async function fetchForPractitionersHome() {
  const forPractitionersQuery = groq`*[_type == "forPractitioners"][0]{
    _id,
    title,
    description,
  }`;

  return await client.fetch(forPractitionersQuery);
}

export async function fetchForPatientsHome() {
  const forPatientsQuery = groq`*[_type == "forPatients"][0]{
    _id,
    title,
    description,
  }`;

  return await client.fetch(forPatientsQuery);
}

export async function fetchNewsletterSubscription() {
  const newsletterSubscriptionQuery = groq`*[_type == "newsletterSubscription"][0]{
    _id,
    title,
    subtitle,
  }`;

  return await client.fetch(newsletterSubscriptionQuery);
}

export async function fetchOpinionSurvey() {
  const opinionSurveyQuery = groq`*[_type == "opinionSurvey"][0]{
    _id,
    title,
    description,
  }`;

  return await client.fetch(opinionSurveyQuery);
}

export async function fetchCollaboration() {
  const collaborationQuery = groq`*[_type == "collaboration"]{
    _id,
    title,
    description,
    productImage,
    collaborationLogo
  }`;

  return await client.fetch(collaborationQuery);
}

export async function fetchPractitionersHero() {
  const practitionersHeroQuery = groq`*[_type == "practitionersHero"][0]{
    _id,
    title,
    subtitle,
    description
  }`;

  return await client.fetch(practitionersHeroQuery);
}

export async function fetchInventorySection() {
  const inventorySectionQuery = groq`*[_type == "inventorySection"][0]{
    _id,
    title,
    description,
  }`;

  return await client.fetch(inventorySectionQuery);
}

export async function benefitsSection() {
  const benefits = groq`*[_type == "benefits"]{
    _id,
    title,
    icon
  }`;

  return await client.fetch(benefits);
}

export async function fetchDemoSection() {
  const demoSectionQuery = groq`*[_type == "demoSection"][0]{
    _id,
    title,
    description,
  }`;

  return await client.fetch(demoSectionQuery);
}

export async function fetchPatientDemoSection() {
  const demoSectionQuery = groq`*[_type == "patientDemoSection"][0]{
    _id,
    title,
    description,
  }`;

  return await client.fetch(demoSectionQuery);
}

export async function fetchPractitionersFeatureContent() {
  const practitionersFeatureContentQuery = groq`*[_type == "practicionersFeatureContent"][0]{
    _id,
    title,
    description,
  }`;

  return await client.fetch(practitionersFeatureContentQuery);
}

export async function fetchPractitionersKeyFeature() {
  const practitionersKeyFeatureQuery = groq`*[_type == "practicionersKeyFeature"]{
    _id,
    title,
    description,
    icon
  }`;

  return await client.fetch(practitionersKeyFeatureQuery);
}

export async function fetchPatientsHero() {
  const patientsHeroQuery = groq`*[_type == "patientsHero"][0]{
    _id,
    subtitle,
    title,
    description,
  }`;

  return await client.fetch(patientsHeroQuery);
}

export async function patientsBenefits() {
  const benefits = groq`*[_type == "patientsBenefits"]{
    _id,
    title,
    icon
  }`;

  return await client.fetch(benefits);
}

export async function fetchReferralSection() {
  const referralSectionQuery = groq`*[_type == "referralSection"][0]{
    _id,
    title,
    description,
  }`;

  return await client.fetch(referralSectionQuery);
}

export async function fetchPatientsFeatureContent() {
  const patientsFeatureContentQuery = groq`*[_type == "patientsFeatureContent"][0]{
    _id,
    title,
    description,
  }`;

  return await client.fetch(patientsFeatureContentQuery);
}

export async function fetchPatientsKeyFeature() {
  const patientsKeyFeatureQuery = groq`*[_type == "patientsKeyFeature"]{
    _id,
    title,
    description,
    icon
  }`;

  return await client.fetch(patientsKeyFeatureQuery);
}

// Fetch testimonials
export async function fetchTestimonials() {
  const testimonialsQuery = groq`*[_type == "testimonial"]{
    _id,
    authorName,
    authorRole,
    testimonialText,
    authorAffiliation,
    authorImage
  }`;

  return await client.fetch(testimonialsQuery);
}
