import { NextResponse } from "next/server";
import {
  fetchPatientDemoSection,
  fetchPatientsFAQs,
  fetchPatientsFeatureContent,
  fetchPatientsHero,
  fetchPatientsKeyFeature,
  fetchReferralSection,
  fetchTestimonials,
  patientsBenefits,
} from "../../../lib/fetchData";
export const revalidate = 10;

export async function GET() {
  try {
    const keyFeatures = await fetchPatientsKeyFeature();
    const keyFeaturesContent = await fetchPatientsFeatureContent();
    const testimonials = await fetchTestimonials();
    const referralSection = await fetchReferralSection();
    const patientHero = await fetchPatientsHero();
    const patientBenefits = await patientsBenefits();
    const faqs = await fetchPatientsFAQs();
    const demoSectionContent = await fetchPatientDemoSection();

    return NextResponse.json({
      keyFeatures,
      keyFeaturesContent,
      testimonials,
      referralSection,
      patientHero,
      patientBenefits,
      faqs,
      demoSectionContent,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Error fetching faqs" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
