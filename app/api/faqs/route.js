import { NextResponse } from "next/server";
import { fetchFAQs } from "../../../lib/fetchData";

export async function GET(request) {
  try {
    const faqs = await fetchFAQs();

    return NextResponse.json(faqs);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Error fetching faqs" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
