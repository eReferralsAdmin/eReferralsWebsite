import React from "react";
import "../styles/Newsletter.css";
function NewsletterSignup() {
  return (
    <section className="newsletter-container">
      <div className="newsletter">
        <div className="content-wrapper">
          <div className="text-content">
            <h3 className="heading">
              Get top insights and news from our search experts
            </h3>
            <p className="subheading">
              Delivered to you daily, straight to your inbox.
            </p>
            <div className="links">
              <a href="#terms" className="link">
                Terms
              </a>
              <span className="link-separator">|</span>
              <a href="#privacy" className="link">
                Privacy
              </a>
            </div>
          </div>

          <form className="form">
            <div className="input-wrapper">
              <span className="email-icon"></span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="email-input"
                aria-label="Enter your email address"
              />
            </div>

            <div className="action-area">
              <label for="consent" className="checkbox-label">
                <input type="checkbox" id="consent" className="checkbox" />I
                agree with the storage & processing of my personal data
              </label>

              <button type="submit" className="submit-button">
                Submit <span className="submit-arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSignup;
