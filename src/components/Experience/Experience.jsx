import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import "./Experience.scss";

const Experience = () => {
  const { experience } = portfolioData;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">02 // Experience</div>
          <h2 className="section-title">
            Production <span className="gradient-text">Engineering Journey</span>
          </h2>
          <p className="section-subtitle">
            Hands-on full-stack development experience contributing to industrial SaaS products, telemetry dashboards, and enterprise platforms.
          </p>
        </div>

        {/* Experience Timeline / Tabbed Layout */}
        <div className="experience-container">
          {/* Company Selector Column */}
          <div className="experience-tabs">
            {experience.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(idx)}
                className={`tab-btn ${activeTab === idx ? "active" : ""}`}
              >
                <div className="tab-company">{exp.company}</div>
                <div className="tab-meta">
                  <span>{exp.role}</span>
                  <span className="tab-badge">{exp.badge}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Experience Card Detail */}
          <div className="experience-display">
            {experience.map((exp, idx) => (
              activeTab === idx && (
                <motion.div
                  key={exp.id}
                  className="bento-card experience-detail-card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="card-top-bar">
                    <div>
                      <div className="role-heading">
                        <h3>{exp.role}</h3>
                        <span className="at-company">@ {exp.company}</span>
                      </div>
                      <div className="project-banner">
                        <Layers size={14} />
                        <span>Platform: <strong>{exp.projectTitle}</strong></span>
                      </div>
                    </div>
                    <span className="type-badge">{exp.type}</span>
                  </div>

                  <div className="exp-meta-bar">
                    <span className="meta-info">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="meta-info">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <p className="exp-summary">{exp.summary}</p>

                  <div className="exp-highlights-title">Key Contributions & Results:</div>
                  <ul className="exp-highlights-list">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx}>
                        <CheckCircle2 size={16} className="highlight-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges */}
                  <div className="exp-skills-group">
                    <span className="skills-label">Technologies Used:</span>
                    <div className="skills-tags">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="tech-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

