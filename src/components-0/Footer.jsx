import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <h2>Start with something wonderful</h2>
            <p>
              Join the over +100 clinics, +3000 patients, and +600 professionals
              in the digital revolution of the medical report management world.
            </p>
            <button className="chat-button">Chat to us</button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-brand">
            <img
              src="/logo-white.svg"
              alt="eReferrals Logo"
              className="footer-logo"
            />
          </div>
          <div className="footer-rights">
            <p>© 2024 eReferrals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
