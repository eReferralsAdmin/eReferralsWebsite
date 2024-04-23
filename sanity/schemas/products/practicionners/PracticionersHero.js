export const PractitionersHero = {
  name: "practitionersHero",
  title: "PractitionersHero",
  type: "document",
  fields: [
    {
      name: "subtitle",
      title: "Subtitle",
      type: "blockContent",
    },
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
