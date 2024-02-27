// lib/fetchData.js
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export async function fetchPosts(startIndex = 0, endIndex = 2) {
  const query = groq`*[_type=='post'] | order(publishedAt desc) [${startIndex}...${
    startIndex + endIndex
  }]{
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    readingTime
  }`;
  const posts = await client.fetch(query);
  return posts;
}

export async function fetchFeaturedPost() {
  const featuredPostQuery = `*[_type == "featuredPost"][0]{
    title,
    overview,
    slug,
    mainImage,
    body,
    publishedAt,
    readingTime
  }`;

  return await client.fetch(featuredPostQuery);
}

export async function fetchFAQs() {
  const faqQuery = groq`*[_type == "faq"]{
    _id,
    question,
    answer
  }`;

  const faqs = await client.fetch(faqQuery);
  return faqs;
}
