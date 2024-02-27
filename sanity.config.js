/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemas";

export default defineConfig({
  basePath: "/studio",
  title: "eReferrals CMS",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Home section
            S.listItem()
              .title("Home")
              .child(
                S.list()
                  .title("Homepage settings")
                  .items([
                    S.listItem()
                      .title("Hero")
                      .schemaType("hero")
                      .child(
                        S.editor()
                          .id("hero")
                          .schemaType("hero")
                          .documentId("hero")
                      ),
                    S.listItem()
                      .title("eReferrals")
                      .child(
                        S.list()
                          .title("About eReferrals")
                          .items([
                            S.listItem()
                              .title("For Practitioners")
                              .schemaType("forPractitioners")
                              .child(
                                S.editor()
                                  .id("forPractitioners")
                                  .schemaType("forPractitioners")
                                  .documentId("forPractitioners")
                              ),
                            S.listItem()
                              .title("For Patients")
                              .schemaType("forPatients")
                              .child(
                                S.editor()
                                  .id("forPatients")
                                  .schemaType("forPatients")
                                  .documentId("forPatients")
                              ),
                          ])
                      ),
                    S.listItem()
                      .title("NewsletterSubscription")
                      .schemaType("newsletterSubscription")
                      .child(
                        S.editor()
                          .id("newsletterSubscription")
                          .schemaType("newsletterSubscription")
                          .documentId("newsletterSubscription")
                      ),
                    S.listItem()
                      .title("Opinion Survey")
                      .schemaType("opinionSurvey")
                      .child(
                        S.editor()
                          .id("opinionSurvey")
                          .schemaType("opinionSurvey")
                          .documentId("opinionSurvey")
                      ),
                    // S.listItem()
                    //   .title("Collaborators")
                    //   .schemaType("collaboration")
                    //   .child(
                    //     S.documentTypeList("collaboration").title(
                    //       "Collaborators List"
                    //     )
                    //   ),
                  ])
              ),
            S.listItem()
              .title("Blog")
              .child(
                S.list()
                  .title("Blog Content")
                  .items([
                    S.listItem()
                      .title("Posts")
                      .schemaType("post")
                      .child(S.documentTypeList("post").title("Posts")),
                    S.listItem()
                      .title("Featured Posts")
                      .schemaType("featuredPost")
                      .child(
                        S.documentTypeList("featuredPost").title(
                          "Featured Posts"
                        )
                      ),
                  ])
              ),
            S.listItem()
              .title("Faqs")
              .schemaType("faq")
              .child(S.documentTypeList("faq").title("Faqs")),
            S.listItem()
              .title("Products")
              .child(
                S.list()
                  .title("Products Pages")
                  .items([
                    S.listItem()
                      .title("For Pratictioners")
                      .child(
                        S.list()
                          .title("For Practicioners Page Setting")
                          .items([
                            // S.listItem()
                            //   .title("Practitioners Hero")
                            //   .child(
                            //     S.editor()
                            //       .id("practitionersHero")
                            //       .schemaType("practitionersHero")
                            //       .documentId("practitionersHero")
                            //   ),
                            S.listItem()
                              .title("Inventory Section")
                              .child(
                                S.editor()
                                  .id("inventorySection")
                                  .schemaType("inventorySection")
                                  .documentId("inventorySection")
                              ),
                            S.listItem()
                              .title("Demo Section")
                              .child(
                                S.editor()
                                  .id("demoSection")
                                  .schemaType("demoSection")
                                  .documentId("demoSection")
                              ),
                            S.listItem()
                              .title("Feature Section")
                              .child(
                                S.list()
                                  .title("Feature Section")
                                  .items([
                                    S.listItem()
                                      .title("Feature Contnet")
                                      .child(
                                        S.editor()
                                          .id("practicionersFeatureContent")
                                          .schemaType(
                                            "practicionersFeatureContent"
                                          )
                                          .documentId(
                                            "practicionersFeatureContent"
                                          )
                                      ),
                                    S.listItem()
                                      .title("Features")
                                      .child(
                                        S.documentTypeList(
                                          "practicionersKeyFeature"
                                        ).title("Practicioners Key Feature")
                                      ),
                                  ])
                              ),
                          ])
                      ),
                    S.listItem()
                      .title("For Patients")
                      .child(
                        S.list()
                          .title("For Patients")
                          .items([
                            S.listItem()
                              .title("Hero")
                              .child(
                                S.editor()
                                  .id("patiensHero")
                                  .schemaType("patiensHero")
                                  .documentId("patiensHero")
                              ),
                            S.listItem()
                              .title("Referral Section")
                              .child(
                                S.editor()
                                  .id("referralSection")
                                  .schemaType("referralSection")
                                  .documentId("referralSection")
                              ),
                            S.listItem()
                              .title("Feature Section")
                              .child(
                                S.list()
                                  .title("Feature Section")
                                  .items([
                                    S.listItem()
                                      .title("Feature Contnet")
                                      .child(
                                        S.editor()
                                          .id("patientsFeatureContent")
                                          .schemaType("patientsFeatureContent")
                                          .documentId("patientsFeatureContent")
                                      ),
                                    S.listItem()
                                      .title("Features")
                                      .child(
                                        S.documentTypeList(
                                          "patientsKeyFeature"
                                        ).title("Practicioners Key Feature")
                                      ),
                                  ])
                              ),
                          ])
                      ),
                  ])
              ),
            S.listItem()
              .title("Testimonials (Recommended by Medics)")
              .child(S.documentTypeList("testimonial").title("Testimonials")),
            // .schemaType("faq")
            // .child(S.documentTypeList("faq").title("Faqs")),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // visionTool({ defaultApiVersion: apiVersion }),
  ],
});
