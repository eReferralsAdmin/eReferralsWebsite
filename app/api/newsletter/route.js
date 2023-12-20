import { NextResponse } from "next/server";

export async function POST(request) {
  console.log(request);
  const formData = await request.formData();
  console.log(formData);
  return NextResponse.redirect("/success");
}
