export const PatientsBenefits = {
  name: "patientsBenefits",
  title: "Benefits",
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
