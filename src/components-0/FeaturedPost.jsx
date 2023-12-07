import Image from "next/image";
import { client } from "../lib/sanityClient";
import { urlFor } from "../lib/imageUrl";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import "../styles/FeaturedPost.css";

const FeaturedPost = async () => {
  const featuredQuery = `*[_type == "featuredPost"][0]{
    "postId": post._ref
  }`;
  const featuredRef = await client.fetch(featuredQuery);

  if (!featuredRef?.postId) {
    return <div>No featured post found</div>;
  }

  const postQuery = `*[_type == "post" && _id == $postId][0]{
    title,
    slug,
    featuredImage,
    body,
    _createdAt
  }`;

  const post = await client.fetch(postQuery, { postId: featuredRef.postId });

  if (!post) {
    return <div>Featured post not found</div>;
  }

  return (
    <div className="featured-post-container">
      <section className="featured-post">
        <img
          src={urlFor(post.featuredImage).url()}
          alt="Featured Post"
          className="featured-image"
        />
        <div className="featured-post-content">
          <div className="featured-post-text">
            <div className="featured-post-meta">
              <span className="featured-post-date">{post._createdAt}</span>
              <div className="featured-reading-time">
                <img
                  src={"/clock.svg"}
                  alt="Clock Icon"
                  className="clock-icon"
                />
                <span>{"3 min read"}</span>
              </div>
            </div>
            <h2 className="featured-post-title">{post.title}</h2>
            <div className="featured-post-excerpt-container">
              <p className="featured-post-excerpt">
                {post.body[0].children[0].text}
              </p>
              <Link
                href={`/blog/${post.slug.current}`}
                className="post-read-more"
              >
                <img src={"/readmore-arrow.svg"} alt="Read More" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedPost;
