import { NextResponse } from "next/server";
import {
  benefitsSection,
  fetchDemoSection,
  fetchInventorySection,
  fetchPractitionersFAQs,
  fetchPractitionersFeatureContent,
  fetchPractitionersHero,
  fetchPractitionersKeyFeature,
  fetchTestimonials,
} from "../../../lib/fetchData";
export const revalidate = 10;

export async function GET() {
  try {
    const inventorySectionContent = await fetchInventorySection();
    const practitionersFeatureContent =
      await fetchPractitionersFeatureContent();
    const demoSectionContent = await fetchDemoSection();
    const testimonials = await fetchTestimonials();
    const features = await fetchPractitionersKeyFeature();
    const hero = await fetchPractitionersHero();
    const benefits = await benefitsSection();
    const faqs = await fetchPractitionersFAQs();

    return NextResponse.json({
      inventorySectionContent,
      practitionersFeatureContent,
      demoSectionContent,
      testimonials,
      features,
      hero,
      benefits,
      faqs,
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
