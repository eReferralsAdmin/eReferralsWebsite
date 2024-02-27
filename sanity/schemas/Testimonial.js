export const Testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
    },
    {
      name: "authorName",
      title: "Author Name",
      type: "string",
    },
    {
      name: "authorRole",
      title: "Author Role",
      type: "string",
    },
    {
      name: "authorAffiliation",
      title: "Author Affiliation",
      type: "string",
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
};
