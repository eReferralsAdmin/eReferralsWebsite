import React from "react";
import PostCard from "../../components/PostCard";
import styles from "../../styles/BlogList.module.css";
import { urlForImage } from "../../sanity/lib/image";
import { calculateReadingTime } from "../../sanity/lib/readingTime";

export const revalidate = 1;

const BlogGrid = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
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
  );
};

export default BlogGrid;
