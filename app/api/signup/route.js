import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const requestBody = await request.json();

    const netlifyFormData = new URLSearchParams();
    netlifyFormData.append("form-name", "signup-for-beta-version");

    for (const [key, value] of Object.entries(requestBody)) {
      netlifyFormData.append(key, value);
    }

    console.log(netlifyFormData);

    // const netlifyResponse = await fetch(
    //   "https://main--erefferals-web-dev.netlify.app/",
    //   {
    //     method: "POST",
    //     body: netlifyFormData,
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   }
    // );

    // if (!netlifyResponse.ok) {
    //   throw new Error("Failed to submit to Netlify");
    // }

    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "Internet sever error" });
  }
}
