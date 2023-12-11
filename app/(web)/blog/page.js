import BlogList from "../../../views/blog/BlogList";
import styles from "./blog.module.css";
import FeaturedPost from "../../../components/FeaturedPost";
import { fetchPosts } from "../../../lib/fetchData";
import NewsletterSignup from "../../../components/NewsletterSignup";

export const revalidate = 10;

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main className={styles.blogContainer}>
      <FeaturedPost />
      <div className={styles.blogPosts}>
        <h1 className={styles.blogTitle}>Recent blog posts</h1>
        <BlogList posts={posts} />
      </div>

      <NewsletterSignup />
    </main>
  );
}
