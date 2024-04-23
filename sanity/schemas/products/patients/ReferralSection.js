export const ReferralSection = {
  name: "referralSection",
  title: "Referral Section",
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
