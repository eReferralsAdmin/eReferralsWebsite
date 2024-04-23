export const NewsletterSubscription = {
  name: "newsletterSubscription",
  title: "Newsletter Subscription",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "blockContent",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
