import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const netlifyFormData = new URLSearchParams();

    netlifyFormData.append("form-name", "newsletter-form");

    for (const [key, value] of Object.entries(requestBody)) {
      netlifyFormData.append(key, value);
    }

    const netlifyResponse = await fetch(
      "https://main--erefferals-web-dev.netlify.app/",
      {
        method: "POST",
        body: netlifyFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!netlifyResponse.ok) {
      throw new Error("Failed to submit to Netlify");
    }

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internet sever error" });
  }
}
