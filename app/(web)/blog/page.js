import BlogList from "../../../views/blog/BlogList";
import styles from "./blog.module.css";
import FeaturedPost from "../../../components/FeaturedPost";
import NewsletterSignup from "../../../views/home/nwsletter/NewsletterSignup";
import { ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
export const revalidate = 10;

async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/api/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="wrapper">
      <div className="container">
        <main className={styles.blogContainer}>
          <FeaturedPost />
          <div className={styles.blogPosts}>
            <h1 className={styles.blogTitle}>Recent blog posts</h1>
            <BlogList posts={posts} />
          </div>

          <div className={styles.newsletterSection}>
            {/* <NewsletterSignup /> */}
            <section className={`${styles.newsletterSignup}  gradient-bg`}>
              <div className={styles.newsletterSignupContainer}>
                <div className={styles.newsletterContent}>
                  <h2>Get top insights and news from our search experts</h2>
                  <p>Delivered to you daily, straight to your inbox.</p>
                  <div className={styles.links}>
                    <Link className={styles.link} href="/">
                      Terms
                    </Link>
                    <span>|</span>
                    <Link className={styles.link} href="/">
                      Privacy
                    </Link>
                  </div>
                </div>
                <form
                  name="newsletter-form"
                  className={styles.signupForm}
                  method="POST"
                  data-netlify="true"
                >
                  <input type="hidden" name="newsletter-form" />
                  <div className={styles.inputGroup}>
                    <div
                      className={styles.inputContainer}
                      // className={`${styles.inputContainer} ${
                      //   errors.email ? "error" : ""
                      // }`}
                    >
                      <EnvelopeIcon
                        className={`${styles.emailIcon} btn-icon`}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        // {...register("email", { required: true })}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.formFooter}>
                    <div className={styles.consent}>
                      <input
                        type="checkbox"
                        id="newsletter-consent"
                        name="newsletter-consent"
                        required
                      />
                      <label htmlFor="newsletter-consent">
                        I agree with the storage & processing of my personal
                        data
                      </label>
                    </div>
                    <button type="submit" className={`${styles.submitButton}`}>
                      Submit <ChevronRightIcon className="btn-icon" />
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
