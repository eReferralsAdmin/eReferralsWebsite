import { client } from "../../lib/sanityClient";
import PostCard from "../../components/PostCard";
import Link from "next/link";
import FeaturedPost from "../../components/FeaturedPost";
import "../../styles/PostGrid.css";
import NewsletterSignup from "../../components/NewsletterSignup";

export const revalidate = 10; // revalidate at most every hour

async function getPostsData() {
  const res = await client.fetch(`*[_type=='post']{
    title,
    slug,
    featuredImage,
    body,
    _createdAt
  }`);
  return res;
}

export default async function Blog() {
  const posts = await getPostsData();
  return (
    <main>
      <FeaturedPost />
      <section className="post-grid-container">
        <div className="recent-posts-container">
          <h2 className="recent-blog-title">Recent blog posts</h2>
          <div className="posts-grid">
            {posts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug.current}`}
                className="no-default-style"
              >
                <PostCard {...post} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <NewsletterSignup />
    </main>
  );
}
