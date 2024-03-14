import { NextResponse } from "next/server";
import {
  fetchDemoSection,
  fetchInventorySection,
  fetchPractitionersFeatureContent,
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

    return NextResponse.json({
      inventorySectionContent,
      practitionersFeatureContent,
      demoSectionContent,
      testimonials,
      features,
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
