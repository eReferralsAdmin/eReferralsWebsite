import React from "react";
import Image from "next/image";
import styles from "./../styles/RichTextComponents.module.css";
import { urlForImage } from "../sanity/lib/image";

const SampleImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder().image(value).width(800).fit("max").auto("format").url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

export const RichTextComponents = {
  types: {
    image: SampleImageComponent,
  },
};
