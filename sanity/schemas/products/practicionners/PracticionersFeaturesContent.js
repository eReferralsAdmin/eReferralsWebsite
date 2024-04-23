export const PractitionersFeatureContent = {
  name: "practitionersFeatureContent",
  title: "Practitioners Feature Content",
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
