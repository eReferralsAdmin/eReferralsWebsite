"use client";
import groq from "groq";
import React, { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { formatDate } from "../../../../lib/formatDate";
import { ClockIcon } from "@heroicons/react/24/outline";
import styles from "../../../../styles/PostPage.module.css";
import PortableText from "react-portable-text";
import NewsletterSignup from "../../../../views/home/nwsletter/NewsletterSignup";
import { fetchNewsletterSubscription } from "../../../../lib/fetchData";
import { useSearchParams } from "next/navigation";

export const revalidate = 10;

const fetchData = async (slug, isFeatured) => {
  const contentType = isFeatured ? "featuredPost" : "post";
  const query = groq`*[_type == '${contentType}' && slug.current == $slug][0]`;
  const post = await client.fetch(query, { slug });
  const newsletterSubscriptionContent = await fetchNewsletterSubscription();
  return { post, newsletterSubscriptionContent };
};

const PostPage = ({ params: { slug } }) => {
  const searchParams = useSearchParams();
  const isFeatured = searchParams.get("feature");

  const [data, setData] = useState({
    post: null,
    newsletterSubscriptionContent: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(slug, isFeatured);
      setData(result);
      setLoading(false);
    };
    getData();
  }, [slug, isFeatured]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { post, newsletterSubscriptionContent } = data;

  return (
    <div className="warapper">
      <div className="container">
        <article className={styles.articleContainer}>
          <section className={styles.sectionContainer}>
            <div className={styles.imageContainer}>
              {post.mainImage && (
                <Image
                  src={urlForImage(post.mainImage)}
                  width={1654}
                  height={794}
                  alt="Post image"
                />
              )}
            </div>
            <div className={styles.postContent}>
              <h1 className={styles.postTitle}>{post.title}</h1>
              <div className={styles.dateAndTimeContainer}>
                <span className={styles.date}>
                  {formatDate(post.publishedAt)}
                </span>
                <div className={styles.readingTimeContainer}>
                  <ClockIcon className={styles.clockIcon} />
                  <span>{post.readingTime}</span>
                  <span className={styles.readingTime}>min read</span>
                </div>
              </div>

              <PortableText
                content={post.body}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                serializers={{
                  h1: (props) => <h1 className={styles.h1} {...props} />,
                  li: ({ children }) => (
                    <li className="special-list-item">{children}</li>
                  ),
                  normal: (props) => <p className={styles.p} {...props} />,
                  image: (props) => {
                    return (
                      <div className={styles.mediaWrapper}>
                        <div className={styles.postImageWrapper}>
                          {props && (
                            <Image
                              src={urlForImage(props)}
                              alt="Picture of the author"
                              sizes="(max-width: 768px) 100vw, 700px"
                              fill
                            />
                          )}
                        </div>
                        <p className={styles.alternativeText}>{props.alt}</p>
                      </div>
                    );
                  },
                }}
              />
            </div>
          </section>
          <div className={styles.newsletterSection}>
            <NewsletterSignup content={newsletterSubscriptionContent} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostPage;
