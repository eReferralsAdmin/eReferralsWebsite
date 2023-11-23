import HeroSection from "../components/HeroSection";
import NewsletterSignup from "../components/NewsletterSignup";
import "../styles/PostGrid.css";
export default async function Home() {
  return (
    <main>
      <HeroSection />
      <section className="post-grid-container">
        <div className="recent-posts-container">
          <h2 className="recent-blog-title">Recent blog posts</h2>
          <div class="posts-grid">
            <div class="post-card">
              <div class="post-card-image">
                <img src={"/hero.jpeg"} alt="Post" />
              </div>
              <div className="post-card-content">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <div className="post-meta">
                  <span className="date">2 Nov 2023</span>
                  <div className="post-reading-time">
                    <img src={"/clock-blue.svg"} alt="Clock Icon" />
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div class="post-card-image">
                <img src={"/hero.jpeg"} alt="Post" />
              </div>
              <div className="post-card-content">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <div className="post-meta">
                  <span className="date">2 Nov 2023</span>
                  <div className="post-reading-time">
                    <img src={"/clock-blue.svg"} alt="Clock Icon" />
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsletterSignup />
    </main>
  );
}
