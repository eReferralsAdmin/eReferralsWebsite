import { NextResponse } from "next/server";
import {
  fetchDemoSection,
  fetchInventorySection,
  fetchPatientsFeatureContent,
  fetchPatientsKeyFeature,
  fetchPractitionersFeatureContent,
  fetchPractitionersKeyFeature,
  fetchReferralSection,
  fetchTestimonials,
} from "../../../lib/fetchData";
export const revalidate = 10;

export async function GET() {
  try {
    const keyFeatures = await fetchPatientsKeyFeature();
    const keyFeaturesContent = await fetchPatientsFeatureContent();
    const testimonials = await fetchTestimonials();
    const referralSection = await fetchReferralSection();

    return NextResponse.json({
      keyFeatures,
      keyFeaturesContent,
      testimonials,
      referralSection,
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
