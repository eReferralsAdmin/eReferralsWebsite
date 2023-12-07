import "./hero.css";
const Hero = () => {
  return (
    // <section id="hero">
    //   <img src="./hero.png" alt="Hero for Desktop" className="desktop-hero" />
    //   <div className="image-container">
    //     <img
    //       src="./mobile-hero.jpeg"
    //       alt="Hero for Mobile"
    //       className="mobile-hero"
    //     />
    //   </div>

    //   <article className="hero-content">
    //     <h1 className="heading">
    //       Connecting doctors and patients to pathology and radiology providers
    //       around Australia.
    //     </h1>
    //     <p className="paragraph">
    //       eReferrals' vision is to revolutionise healthcare in Australia by
    //       seamlessly connecting doctors and patients with premier pathology and
    //       radiology providers. Our aim is to provide a software solution that is
    //       reliable, efficient, and secure to optimise doctors' time and simplify
    //       the referral process for patients.
    //     </p>
    //     <div class="button-container">
    //       <button class="button-interested">
    //         I'm interested! <i class="ri-arrow-right-s-line"></i>
    //       </button>
    //       <button class="button-learn-more">
    //         Learn more <i class="ri-search-line"></i>
    //       </button>
    //     </div>
    //   </article>
    // </section>
    <section id="hero">
      <img src="./hero.png" alt="Hero for Desktop" className="desktop-hero" />
      <div className="image-container">
        <img
          src="./mobile-hero.jpeg"
          alt="Hero for Mobile"
          className="mobile-hero"
        />
      </div>

      <article className="hero-content">
        <h1 className="heading">
          Connecting doctors and patients to pathology and radiology providers
          around Australia.
        </h1>
        <p className="description">
          eReferrals' vision is to revolutionise healthcare in Australia by
          seamlessly connecting doctors and patients with premier pathology and
          radiology providers. Our aim is to provide a software solution that is
          reliable, efficient, and secure to optimise doctors' time and simplify
          the referral process for patients.
        </p>
        <div class="button-container">
          <button class="button-interested">
            I'm interested! <i class="ri-arrow-right-s-line"></i>
          </button>
          <button class="button-learn-more">
            Learn more <i class="ri-search-line"></i>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Hero;
