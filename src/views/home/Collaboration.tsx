import Image from "next/image";
import "./collaboration.css";

const Collaboration = () => {
  return (
    <div>
      <div id="desktop-collaboration" className="desktop container">
        <Image
          src={"arrow-left.svg"}
          alt="arrow-left"
          width={95}
          height={95}
          className="arrow"
        />
        <div className="collaboration-content">
          {/* <h4 className="heading">In collaboration with</h4> */}
          <section className="collaboration-section">
            <div className="brand-description-wrapper">
              <img
                src="/brand-logo.png"
                alt="Brand Logo"
                className="brand-logo"
              />
              <p className="description">
                Richard and his team's technical capabilities to deliver
                functionality on time and assist with the business execution has
                proven to be a great investment from an ROI perspective.
              </p>
              <button className="button-interested">
                I'm interested! <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>

            <div className="brand-product-wrapper">
              <img
                src="brand-product.svg"
                alt="Brand Product"
                className="brand-product-image"
              />
            </div>
          </section>
        </div>
        <Image
          src={"arrow-right.svg"}
          alt="arrow-right"
          className="arrow"
          width={95}
          height={95}
        />
      </div>
      <div id="collaboration-mobile" className="mobile">
        <h4 className="heading">In collaboration with</h4>
        <div className="collaboration-content">
          <div className="brand-description-wrapper">
            <img
              src="/brand-logo.png"
              alt="Brand Logo"
              className="brand-logo"
            />
            <p className="description">
              Richard and his team's technical capabilities to deliver
              functionality on time and assist with the business execution has
              proven to be a great investment from an ROI perspective.
            </p>
            <button className="button-interested">
              I'm interested! <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
          <div className="brand-product-wrapper">
            <img
              src="brand-product.svg"
              alt="Brand Product"
              className="brand-product-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
