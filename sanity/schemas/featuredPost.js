// export const featuredPost = {
//   name: "featuredPost",
//   title: "Featured Post",
//   type: "document",
//   fields: [
//     {
//       name: "post",
//       title: "Post",
//       type: "reference",
//       to: [{ type: "post" }],
//     },
//   ],
//   preview: {
//     select: {
//       title: "post.title",
//       media: "post.featuredImage",
//     },
//     prepare(selection) {
//       const { title, media } = selection;
//       return {
//         title: `Featured: ${title}`,
//         media,
//       };
//     },
//   },
// };

import { calculateReadingTime } from "../lib/readingTime";

export const featuredPost = {
  name: "featuredPost",
  title: "Featured Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "overview",
      title: "Overview",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
      body: "body",
    },
    prepare(selection) {
      const { title, body, media } = selection;
      const readingTime = calculateReadingTime(body);
      return {
        title,
        subtitle: `${readingTime} min read`,
        media,
      };
    },
  },
};
