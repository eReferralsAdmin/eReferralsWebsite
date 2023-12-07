import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import { client } from "../../../lib/sanityClient";
import { urlFor } from "../../../lib/imageUrl";
import "../../../styles/SingleArticle.css";
import NewsletterSignup from "../../../components/NewsletterSignup";

const Post = async ({ params }) => {
  const { slug } = params;
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    featuredImage,
    body,
    _createdAt,
  }`;
  const post = await client.fetch(query, { slug });

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return (
    <section>
      <article className="single-post">
        <div className="featured-image-container">
          <Image
            src={urlFor(post.featuredImage).url()}
            layout="fill"
            objectFit="cover"
            alt={post.title}
            className="featured-image"
          />
          <div className="featured-image-overlay"></div>
        </div>
        <div className="single-post-container">
          <h1 className="single-post-title">{post.title}</h1>
          <div className="article-meta">
            <p>{post._createdAt}</p>
            <div className="reading-time">
              <img src={"/clock.svg"} alt="Clock Icon" className="clock-icon" />
              <span>{"3 min read"}</span>
            </div>
          </div>
          <div className="single-post-body">
            <BlockContent
              blocks={post.body}
              projectId={client.config().projectId}
              dataset={client.config().dataset}
            />
          </div>
        </div>
      </article>
      <NewsletterSignup />
    </section>
  );
};

export default Post;
