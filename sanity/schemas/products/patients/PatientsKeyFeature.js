export const PatientsKeyFeature = {
  name: "patientsKeyFeature",
  title: "Patients Key Feature",
  type: "document",
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
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
