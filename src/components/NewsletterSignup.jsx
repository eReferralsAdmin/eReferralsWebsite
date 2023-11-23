import React from "react";
import "../styles/Newsletter.css";
function NewsletterSignup() {
  return (
    <section className="newsletter-container">
      <div class="newsletter">
        <div class="content-wrapper">
          <div class="text-content">
            <h3 class="heading">
              Get top insights and news from our search experts
            </h3>
            <p class="subheading">
              Delivered to you daily, straight to your inbox.
            </p>
            <div class="links">
              <a href="#terms" class="link">
                Terms
              </a>
              <span class="link-separator">|</span>
              <a href="#privacy" class="link">
                Privacy
              </a>
            </div>
          </div>

          <form class="form">
            <div class="input-wrapper">
              <span class="email-icon"></span>
              <input
                type="email"
                placeholder="Enter your email address"
                class="email-input"
                aria-label="Enter your email address"
              />
            </div>

            <div class="action-area">
              <label for="consent" class="checkbox-label">
                <input type="checkbox" id="consent" class="checkbox" />I agree
                with the storage & processing of my personal data
              </label>

              <button type="submit" class="submit-button">
                Submit <span class="submit-arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSignup;
