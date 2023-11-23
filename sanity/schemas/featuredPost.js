export default {
  name: "featuredPost",
  title: "Featured Post",
  type: "document",
  fields: [
    {
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
  preview: {
    select: {
      title: "post.title",
      media: "post.featuredImage",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: `Featured: ${title}`,
        media,
      };
    },
  },
};
