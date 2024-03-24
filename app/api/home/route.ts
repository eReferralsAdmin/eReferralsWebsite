import { NextResponse } from "next/server";
import {
  fetchCollaboration,
  fetchForPatientsHome,
  fetchForPractitionersHome,
  fetchHomeFAQs,
  fetchHomeHero,
  fetchNewsletterSubscription,
  fetchOpinionSurvey,
} from "../../../lib/fetchData";
export const revalidate = 10;

export async function GET() {
  try {
    const homeHero = await fetchHomeHero();
    const forPractitionersHome = await fetchForPractitionersHome();
    const forPatientsHome = await fetchForPatientsHome();
    const newsletterSubscriptionContent = await fetchNewsletterSubscription();
    const opinionSurvey = await fetchOpinionSurvey();
    const collaborations = await fetchCollaboration();
    const homeFaqs = await fetchHomeFAQs();

    return NextResponse.json({
      homeHero,
      forPractitionersHome,
      forPatientsHome,
      newsletterSubscriptionContent,
      opinionSurvey,
      collaborations,
      homeFaqs,
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
