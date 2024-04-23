export const Collaboration = {
  name: "collaboration",
  title: "Collaboration",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "blockContent",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "collaborationLogo",
      title: "Collaboration Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "productImage",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
