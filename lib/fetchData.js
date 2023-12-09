// lib/fetchData.js
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export async function fetchPosts() {
  const query = groq`*[_type=='post']{
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt,
  }`;
  return await client.fetch(query);
}

export async function fetchFeaturedPost() {
  // const featuredPostRefQuery = groq`*[_type == "featuredPost"][0]{
  //   "postId": post._ref
  // }`;
  // const featuredRef = await client.fetch(featuredPostRefQuery);

  // if (!featuredRef?.postId) {
  //   return null;
  // }

  const featuredPostQuery = `*[_type == "featuredPost"][0]{
    title,
    overview,
    slug,
    mainImage,
    body,
    publishedAt,
  }`;

  return await client.fetch(featuredPostQuery);
}
