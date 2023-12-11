"use client";
import React, { useState } from "react";
import PostCard from "../../components/PostCard";
import styles from "../../styles/BlogList.module.css";
import { urlForImage } from "../../sanity/lib/image";
import { calculateReadingTime } from "../../sanity/lib/readingTime";

const BlogGrid = ({ posts }) => {
  const [blogPosts, setBlogPosts] = useState(posts);
  const [startIndex, setStartIndex] = useState(posts.length);
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePosts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${process.env.API_URL}/posts?startIndex=${startIndex}&limit=2`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const newPosts = await res.json();
      setBlogPosts([...blogPosts, ...newPosts]);
      setStartIndex(startIndex + 2);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            slug={post.slug}
            date={post.publishedAt}
            readTime={calculateReadingTime(post.body)}
            imageUrl={urlForImage(post.mainImage)}
          />
        ))}
      </div>

      <button onClick={loadMorePosts} className={styles.loadMore}>
        {isLoading ? "Loading..." : "Load more..."}
      </button>
    </>
  );
};

export default BlogGrid;
