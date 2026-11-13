import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, ExternalLink } from "lucide-react";
import "./Education.scss";

const Education = () => {
  const { education, certifications } = portfolioData;
  const edu = education[0];

  return (
    <section id="education" className="education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">05 // Credentials</div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Academic degree in Information Technology alongside continuous industry certifications in Cloud, JavaScript, SQL, and Modern CSS.
          </p>
        </div>

        <div className="edu-cert-container">
          {/* Left: Detailed Education Card */}
          <motion.div
            className="bento-card edu-degree-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="edu-card-header">
              <div className="edu-icon-badge">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="edu-badge-tag">Degree Program</span>
                <h3 className="degree-title">{edu.degree}</h3>
              </div>
            </div>

            <div className="institution-info">
              <div className="inst-name">{edu.institution}</div>
              <div className="inst-meta">
                <span className="meta-pill"><MapPin size={13} /> {edu.location}</span>
                <span className="meta-pill"><Calendar size={13} /> {edu.period}</span>
              </div>
            </div>

            <div className="cgpa-highlight">
              <span className="cgpa-label">Graduation Grade:</span>
              <span className="cgpa-score">{edu.score}</span>
            </div>

            <div className="edu-highlights">
              <h4>Key Academic Focus:</h4>
              <ul>
                {edu.highlights.map((h, idx) => (
                  <li key={idx}>
                    <CheckCircle size={15} className="check-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Certifications Grid */}
          <div className="certifications-grid">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="bento-card cert-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="cert-top">
                  <span className="cert-icon"><Award size={18} /></span>
                  <span className="cert-tag">{cert.tag}</span>
                </div>
                <h4 className="cert-name">{cert.name}</h4>
                <div className="cert-footer">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

