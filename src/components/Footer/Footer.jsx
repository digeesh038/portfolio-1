import React from "react";
import { portfolioData } from "../../data/portfolioData";
import { ArrowUp, Terminal, Heart } from "lucide-react";
import "./Footer.scss";

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-icon"><Terminal size={16} /></span>
            <span className="brand-name">{personal.displayName}</span>
            <span className="brand-dot">.</span>
            <p className="brand-desc">{personal.tagline}</p>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </div>

          <div className="footer-tech">
            <span>Designed & Engineered with React 18, Vite & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

