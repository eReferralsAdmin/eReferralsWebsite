import { client } from "../../lib/sanityClient";
import PostCard from "../../components/PostCard";
import Link from "next/link";
import FeaturedPost from "../../components/FeaturedPost";
import "../../styles/PostGrid.css";
import NewsletterSignup from "../../components/NewsletterSignup";

export const getPostsData = async () => {
  const res = await client.fetch(`*[_type=='post']{
    title,
    slug,
    featuredImage,
    body,
    _createdAt
  }`);
  return res;
};

const Blog = async () => {
  const posts = await getPostsData();
  return (
    <main>
      <FeaturedPost />
      <section className="post-grid-container">
        <div className="recent-posts-container">
          <h2 className="recent-blog-title">Recent blog posts</h2>
          <div class="posts-grid">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug.current}`}
                class="no-default-style"
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
};

export default Blog;
