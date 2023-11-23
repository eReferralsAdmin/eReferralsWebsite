import "../styles/FeaturedPost.css";

const HeroSection = ({ backgroundImage, title, date, readTime, summary }) => {
  return (
    <div className="featured-post-container">
      <section className="featured-post">
        <img
          src={"/hero.jpeg"}
          alt="Featured Post"
          className="featured-image"
        />
        <div className="featured-post-content">
          <div className="featured-post-text">
            <div className="featured-post-meta">
              <span className="featured-post-date">{date || "2 Nov 2023"}</span>
              <div className="featured-reading-time">
                <img
                  src={"/clock.svg"}
                  alt="Clock Icon"
                  className="clock-icon"
                />
                <span>{readTime || "3 min read"}</span>
              </div>
            </div>
            <h2 className="featured-post-title">
              {title ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            </h2>
            <div className="featured-post-excerpt-container">
              <p className="featured-post-excerpt">
                {summary ||
                  "Donec dui purus, mollis non tempor at, imperdiet quis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              </p>
              <a href="#" className="post-read-more">
                <img src={"/readmore-arrow.svg"} alt="Read More" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
