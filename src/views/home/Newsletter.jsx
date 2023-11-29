import Link from "next/link";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="container">
      <section className="newsletter">
        <div className="newsletter-content">
          <h4>Get top insights and news from our search experts</h4>
          <p>Delivered to you daily, straight to your inbox.</p>
          <div className="terms">
            <Link href="/terms">Terms</Link>
            <span>|</span>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <div className="newsletter-form">
          <div className="email-input-container">
            <i class="ri-mail-line"></i>
            <input
              type="email"
              className="email-input"
              placeholder="Email address"
            />
          </div>
          <form class="consent-form">
            <label class="checkbox-container">
              <input type="checkbox" id="dataConsent" name="dataConsent" />
              <span class="checkmark"></span>I agree with the storage &
              processing of my personal data
            </label>
            <button type="submit" class="submit-button">
              Submit <i class="ri-arrow-right-s-line"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
