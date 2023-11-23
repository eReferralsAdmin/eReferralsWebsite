import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/imageUrl";
import Link from "next/link";

const PostCard = ({ title, featuredImage, _createdAt, readingTime }) => {
  return (

      <div class="post-card">
        <div class="post-card-image">
          <img src={urlFor(featuredImage).url()} alt="Post" />
        </div>
        <div className="post-card-content">
          <h3>{title}</h3>
          <div className="post-meta">
            <span className="date">{_createdAt}</span>
            <div className="post-reading-time">
              <img src={"/clock-blue.svg"} alt="Clock Icon" />
              <span>3 min read</span>
            </div>
          </div>
        </div>
      </div>

  );
};

export default PostCard;
