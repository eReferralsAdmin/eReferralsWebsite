export const Testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "testimonialText",
      title: "Testimonial Text",
      // type: "text",
      type: "blockContent",
    },
    {
      name: "authorName",
      title: "Author Name",
      // type: "string",
      type: "blockContent",
    },
    {
      name: "authorRole",
      title: "Author Role",
      // type: "string",
      type: "blockContent",
    },
    {
      name: "authorAffiliation",
      title: "Author Affiliation",
      // type: "string",
      type: "blockContent",
    },
    {
      name: "authorImage",
      title: "Author Image",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot for precise control over how images are cropped.
      },
    },
  ],
  preview: {
    select: {
      title: "testimonialText",
    },
  },
};
