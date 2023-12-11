import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

// export const urlForImage = (source) => {
//   return imageBuilder?.image(source).auto("format").fit("max").url();
// };

export const urlForImage = (source) => {
  // Check if source is an object with _ref
  if (source && typeof source === "object" && source._ref) {
    // Use the _ref as the source for the imageBuilder
    return imageBuilder.image(source._ref).auto("format").fit("max").url();
  }
  // Fallback for other types of sources
  return imageBuilder.image(source).auto("format").fit("max").url();
};
