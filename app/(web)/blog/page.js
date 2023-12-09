import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import BlogList from "../../../views/blog/BlogList";
import styles from "./blog.module.css";
import FeaturedPost from "../../../components/FeaturedPost";
import { fetchPosts } from "../../../lib/fetchData";

export const revalidate = 1;

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <main>
      <FeaturedPost />
      <div className={styles.blogPosts}>
        <h1 className={styles.blogTitle}>Recent blog posts</h1>
        <BlogList posts={posts} />
      </div>
    </main>
  );
}
