import { NextResponse } from "next/server";
import { fetchPosts } from "../../../lib/fetchData";

export async function GET(request) {
  const url = new URL(request.url);
  const startIndex = parseInt(url.searchParams.get("startIndex")) || 0;
  const endIndex = parseInt(url.searchParams.get("endIndex")) || 2;

  try {
    const posts = await fetchPosts(startIndex, endIndex);

    return NextResponse.json(posts);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Error fetching posts" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
