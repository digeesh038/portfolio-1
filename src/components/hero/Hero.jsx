import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { Download, ArrowRight, Mail, Check, Sparkles, MapPin } from "lucide-react";
import { Github, Linkedin, Twitter } from "../Common/Icons";
import "./Hero.scss";

const Hero = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Narrative & CTAs */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Availability Badge */}
          <div className="availability-badge">
            <span className="pulsing-dot"></span>
            <span className="badge-text">{personal.availability}</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-name">{personal.displayName}</span>
            <br />
            <span className="title-gradient">{personal.title}</span>
          </h1>

          {/* Subtitle / Tech stack summary */}
          <p className="hero-subtitle">
            {personal.tagline}
          </p>

          <p className="hero-description">
            {personal.bio}
          </p>

          {/* Location & Meta */}
          <div className="hero-meta">
            <span className="meta-item">
              <MapPin size={15} />
              {personal.location}
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <Sparkles size={15} />
              1.2+ Years Production Experience
            </span>
          </div>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <a href="#projects" className="cta-btn primary">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>

            <a
              href={personal.resumeUrl}
              download="Digeesh_Sakthivel_Resume.pdf"
              className="cta-btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </a>

            <button onClick={copyEmail} className="cta-btn copy-email" title="Click to copy email">
              {copied ? <Check size={17} color="#10b981" /> : <Mail size={17} />}
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Social Profiles */}
          <div className="hero-socials">
            <span className="social-label">Find me on:</span>
            <div className="social-links">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personal.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Twitter Profile"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Developer Studio Card */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="code-terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">developer.config.ts</div>
              <div className="terminal-badge">READY</div>
            </div>

            <div className="terminal-body">
              <pre className="code-block">
                <code>
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-var">developer</span>:{" "}
                  <span className="code-type">FullStackEngineer</span> = &#123;
                  {"\n"}  <span className="code-prop">name</span>:{" "}
                  <span className="code-string">"{personal.displayName}"</span>,
                  {"\n"}  <span className="code-prop">location</span>:{" "}
                  <span className="code-string">"Bangalore, India"</span>,
                  {"\n"}  <span className="code-prop">experience</span>:{" "}
                  <span className="code-string">"1.2+ Years Production"</span>,
                  {"\n"}  <span className="code-prop">roles</span>: [
                  {"\n"}    <span className="code-string">"Full Stack Developer"</span>,
                  {"\n"}    <span className="code-string">"MERN Stack Developer"</span>
                  {"\n"}  ],
                  {"\n"}  <span className="code-prop">productionSystems</span>: [
                  {"\n"}    <span className="code-string">"Delex (Oraxiz India)"</span>,
                  {"\n"}    <span className="code-string">"Hydrology ERP (Archle Labs)"</span>
                  {"\n"}  ],
                  {"\n"}  <span className="code-prop">coreStack</span>: &#123;
                  {"\n"}    <span className="code-prop">client</span>: [<span className="code-string">"React"</span>, <span className="code-string">"TypeScript"</span>, <span className="code-string">"Tailwind"</span>],
                  {"\n"}    <span className="code-prop">server</span>: [<span className="code-string">"FastAPI"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"Express"</span>],
                  {"\n"}    <span className="code-prop">data</span>: [<span className="code-string">"PostgreSQL"</span>, <span className="code-string">"MongoDB"</span>, <span className="code-string">"Redis"</span>],
                  {"\n"}    <span className="code-prop">devops</span>: [<span className="code-string">"Docker"</span>, <span className="code-string">"Git"</span>, <span className="code-string">"REST APIs"</span>]
                  {"\n"}  &#125;,
                  {"\n"}  <span className="code-prop">status</span>:{" "}
                  <span className="code-string">"Open to High-Impact Roles"</span>
                  {"\n"}&#125;;
                </code>
              </pre>
            </div>

            {/* Quick Metrics Ticker */}
            <div className="terminal-footer">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="stat-pill">
                  <span className="stat-val">{stat.value}</span>
                  <span className="stat-lbl">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
