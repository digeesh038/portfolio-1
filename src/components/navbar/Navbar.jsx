import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { portfolioData } from "../../data/portfolioData";
import { Sun, Moon, Download, Menu, X, Terminal } from "lucide-react";
import "./Navbar.scss";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "experience", "projects", "skills", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand">
          <span className="brand-icon">
            <Terminal size={18} />
          </span>
          <span className="brand-name">
            {portfolioData.personal.displayName}
            <span className="brand-dot">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-nav desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Dark/Light Mode"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button> */}

          {/* Resume Download CTA */}
          <a
            href={portfolioData.personal.resumeUrl}
            download="Digeesh_Sakthivel_Resume.pdf"
            className="nav-resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={15} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={portfolioData.personal.resumeUrl}
              download="Digeesh_Sakthivel_Resume.pdf"
              className="mobile-resume-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
