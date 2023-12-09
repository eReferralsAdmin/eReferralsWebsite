import { blockContent } from "./schemas/blockContent";
import { post } from "./schemas/post";
import { featuredPost } from "./schemas/featuredPost";

export const schema = {
  types: [post, blockContent, featuredPost],
};
