import React from "react";
import styles from "../styles/PostCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import { formatDate } from "../lib/formatDate";

const PostCard = ({ title, slug, date, readTime, imageUrl }) => {
  return (
    <Link href={`/blog/${slug.current}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src={imageUrl} width={442} height={320} alt="Blog Post" />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.meta}>
            <p className={styles.date}>{formatDate(date)}</p>
            <p className={styles.readTime}>
              <ClockIcon className={styles.clockIcon} />
              {readTime} min read
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
