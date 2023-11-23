import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2023-11-17",
  dataset: "production",
  projectId: "9d6ebqk7",
  useCdn: true,
  token: process.env.SANITY_ACCESS_TOKEN,
});
