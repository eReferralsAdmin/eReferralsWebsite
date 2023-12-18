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
    {
      name: "readingTime",
      title: "Reading Time",
      type: "number",
      description: "Enter the reading time in minutes",
      validation: (Rule) => Rule.required().min(1),
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
      readingTime: "readingTime",
    },
    prepare(selection) {
      const { title, readingTime, media } = selection;
      return {
        title,
        subtitle: `${readingTime} min read`,
        media,
      };
    },
  },
};
