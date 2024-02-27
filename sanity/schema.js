import { blockContent } from "./schemas/blockContent";
import { post } from "./schemas/post";
import { featuredPost } from "./schemas/featuredPost";
import { Faq } from "./schemas/faq";
import { Homepage } from "./schemas/homePage";
import { page } from "./schemas/page";
import { heroSection } from "./schemas/heroSection";

export const schema = {
  types: [post, blockContent, featuredPost, Faq],
};
