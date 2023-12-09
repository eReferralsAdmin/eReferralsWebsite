import React from "react";
import { fetchFeaturedPost } from "../lib/fetchData";
import styles from "../styles/FeaturedPost.module.css";
import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import { calculateReadingTime } from "../sanity/lib/readingTime";
import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { formatDate } from "../lib/formatDate";

export const revalidate = 1;

const FeaturedPost = async () => {
  const featuredPost = await fetchFeaturedPost();
  return (
    <div className={styles.featuredPostCard}>
      <div className={styles.featuredPostImageContainer}>
        <Image
          src={urlForImage(featuredPost.mainImage)}
          alt="Featured Post Image"
          className={styles.featuredImage}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.featuredContent}>
        <div className={styles.postInfo}>
          <strong className={styles.postDate}>
            {formatDate(featuredPost.publishedAt)}
          </strong>
          <p className={styles.readingTime}>
            <ClockIcon className={styles.clockIcon} />
            <span>{calculateReadingTime(featuredPost.body)} min read</span>
          </p>
        </div>
        <h1 className={styles.postTitle}>{featuredPost.title}</h1>
        <div className={styles.postDetails}>
          <p className={styles.postDescription}>{featuredPost.overview}</p>
          <Link
            href={`blog/${featuredPost.slug.current}`}
            className={styles.readMoreBtn}
          >
            <ChevronRightIcon className={styles.readMoreIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
