export const HomeFaq = {
  name: "homeFaq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "blockContent",
      //   validation: (Rule) => Rule.required(),
    },
  ],
};
