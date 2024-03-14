import { NextResponse } from "next/server";
import {
  fetchCollaboration,
  fetchForPatientsHome,
  fetchForPractitionersHome,
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

    return NextResponse.json({
      homeHero,
      forPractitionersHome,
      forPatientsHome,
      newsletterSubscriptionContent,
      opinionSurvey,
      collaborations,
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
