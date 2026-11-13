import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { Award, Code2, Cpu, GraduationCap, Layers, Server, ShieldCheck, Zap } from "lucide-react";
import "./about.scss";

const About = () => {
  const { personal, education } = portfolioData;
  const edu = education[0];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">01 // Background & Expertise</div>
          <h2 className="section-title">
            Engineering Full-Stack Systems with <span className="gradient-text">Speed & Stability</span>
          </h2>
          <p className="section-subtitle">
            From industrial water treatment telemetry to asset inspection workflows, I build end-to-end applications that solve real-world operational challenges.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="about-bento-grid">
          {/* Main Narrative Card */}
          <motion.div
            className="bento-card narrative-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-icon-title">
              <span className="card-icon"><Code2 size={20} /></span>
              <h3>Full-Stack Perspective</h3>
            </div>
            <p className="narrative-text">
              I am a <strong>Full Stack Developer</strong> based in Bangalore with <strong>1.2+ years of production experience</strong>. My focus centers on architecting resilient web platforms using <strong>React.js, TypeScript, FastAPI, Node.js, PostgreSQL, and MongoDB</strong>.
            </p>
            <p className="narrative-text">
              Having shipped production features for industrial platforms like <strong>Delex</strong> (asset inspection & maintenance management) and <strong>Hydrology ERP</strong> (industrial water plant telemetry), I bridge the gap between responsive, intuitive frontends and secure, containerized backend microservices.
            </p>
            <div className="narrative-tags">
              <span className="tech-tag"><Zap size={13} /> End-to-End Delivery</span>
              <span className="tech-tag"><Server size={13} /> REST API Design</span>
              <span className="tech-tag"><ShieldCheck size={13} /> Role-Based Access</span>
              <span className="tech-tag"><Cpu size={13} /> Dockerized Workflows</span>
            </div>
          </motion.div>

          {/* Key Principles Bento Card */}
          <motion.div
            className="bento-card principles-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="card-icon-title">
              <span className="card-icon"><Layers size={20} /></span>
              <h3>What I Bring to Teams</h3>
            </div>
            <ul className="principles-list">
              <li>
                <strong>Architectural Cleanliness:</strong> Writing modular, typed, and maintainable TypeScript & Python/FastAPI codebases with strict input validation.
              </li>
              <li>
                <strong>Real-Time Engineering:</strong> Crafting low-latency WebSocket flows with Socket.IO and Redis caching for instant updates.
              </li>
              <li>
                <strong>Business Impact:</strong> Understanding customer workflows — from plant telemetry recordings to multi-role maintenance approvals.
              </li>
            </ul>
          </motion.div>

          {/* Education Bento Card */}
          <motion.div
            className="bento-card education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-icon-title">
              <span className="card-icon"><GraduationCap size={20} /></span>
              <h3>Formal Education</h3>
            </div>
            <div className="edu-content">
              <div className="edu-institution">{edu.institution}</div>
              <div className="edu-location">{edu.location}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-meta">
                <span className="edu-period">{edu.period}</span>
                <span className="edu-score">{edu.score}</span>
              </div>
              <p className="edu-notes">
                Concentration in Database Engineering, Distributed Systems, Software Design Patterns, and Web Architectures.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
