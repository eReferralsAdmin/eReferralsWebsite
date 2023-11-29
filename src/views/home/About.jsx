import Image from "next/image";
import "./about.css";
const About = () => {
  return (
    <section class="about" aria-labelledby="ereferrals-heading">
      <h2 class="heading">Learn more about eReferrals</h2>
      <div role="tablist" aria-label="eReferrals Options" class="tab-container">
        <button
          role="tab"
          aria-selected="true"
          aria-controls="practitioners-content"
          id="practitioners-tab"
          class="tab active"
        >
          For Practitioners
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="patients-content"
          id="patients-tab"
          class="tab"
        >
          For Patients
        </button>
      </div>
      <section
        class="tab-content"
        role="tabpanel"
        aria-labelledby="practitioners-tab"
        // class="feature-section"
      >
        <img
          fill
          src="/practitioners-feature.png"
          alt="eReferrals feature for practitioners"
          className="feature-image"
        />
        <div class="feature-content">
          <h3 class="heading">Advanced Provider Search</h3>
          <p class="description">
            Easily locate pathology and radiology providers based on location,
            services offered, or your personal favourites list, allowing you to
            readily identify the most suitable provider for your patient's
            needs.
          </p>
          <button class="button-interested">
            I'm interested! <i class="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </section>
    </section>
  );
};

export default About;
