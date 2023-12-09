import groq from "groq";
import React from "react";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
// import { PortableText } from "@portabletext/react";
import { formatDate } from "../../../../lib/formatDate";
import { ClockIcon } from "@heroicons/react/24/outline";
import { calculateReadingTime } from "../../../../sanity/lib/readingTime";
import styles from "../../../../styles/PostPage.module.css";
import RichTextComponents from "../../../../components/RichTextComponents";
import PortableText from "react-portable-text";

const PostPage = async ({ params: { slug } }) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]`;
  const post = await client.fetch(query, { slug });

  return (
    <article className={styles.articleContainer}>
      <section className={styles.sectionContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={urlForImage(post.mainImage)}
            width={1654}
            height={794}
            alt="Post image"
          />
        </div>
        <div className={styles.postContent}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <div className={styles.dateAndTimeContainer}>
            <span className={styles.date}>{formatDate(post.publishedAt)}</span>
            <div className={styles.readingTimeContainer}>
              <ClockIcon className={styles.clockIcon} />
              <span className={styles.readingTime}>min read</span>
              <span>{calculateReadingTime(post.body)}</span>
            </div>
          </div>

          <PortableText
            // value={post.body}
            content={post.body}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            // components={RichTextComponents}
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
                      <Image
                        src={urlForImage(props)}
                        alt="Picture of the author"
                        sizes="(max-width: 768px) 100vw, 700px"
                        fill
                      />
                    </div>
                    <p className={styles.alternativeText}>{props.alt}</p>
                  </div>
                );
              },
            }}
          />
        </div>
      </section>
    </article>
  );
};

export default PostPage;
