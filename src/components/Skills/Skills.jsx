import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import {
  Code,
  FileCode,
  Terminal,
  Database,
  Layers,
  Globe,
  Palette,
  Layout,
  Brush,
  Sparkles,
  Smartphone,
  Zap,
  Server,
  Cpu,
  Repeat,
  Radio,
  HardDrive,
  Cloud,
  Lock,
  Key,
  Shield,
  Users,
  CheckCircle,
  ShieldAlert,
  Box,
  GitBranch,
  Send,
  UploadCloud,
  Flame
} from "lucide-react";
import "./Skills.scss";

// Icon mapping helper
const iconMap = {
  Code,
  FileCode,
  Terminal,
  Database,
  Layers,
  Globe,
  Palette,
  Layout,
  Brush,
  Sparkles,
  Smartphone,
  Zap,
  Server,
  Cpu,
  Repeat,
  Radio,
  HardDrive,
  Cloud,
  Lock,
  Key,
  Shield,
  Users,
  CheckCircle,
  ShieldAlert,
  Box,
  GitBranch,
  Send,
  UploadCloud,
  Flame
};

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { title: "Languages", key: "languages", icon: <Code size={18} /> },
    { title: "Frontend Engineering", key: "frontend", icon: <Layers size={18} /> },
    { title: "Backend & Microservices", key: "backend", icon: <Server size={18} /> },
    { title: "Databases & Caching", key: "databases", icon: <Database size={18} /> },
    { title: "Security & Authentication", key: "security", icon: <Lock size={18} /> },
    { title: "DevOps & Cloud Tools", key: "devops", icon: <Box size={18} /> }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">04 // Core Competencies</div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills Matrix</span>
          </h2>
          <p className="section-subtitle">
            Technologies and frameworks I utilize across end-to-end full-stack architectures, API design, and containerized deployments.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="skills-grid">
          {categories.map((cat, idx) => {
            const items = skills[cat.key];
            return (
              <motion.div
                key={cat.key}
                className="bento-card skill-group-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="skill-group-header">
                  <span className="skill-group-icon">{cat.icon}</span>
                  <h3>{cat.title}</h3>
                </div>

                <div className="skills-items-container">
                  {items.map((skill, sIdx) => {
                    const IconComp = iconMap[skill.icon] || Code;
                    return (
                      <div key={sIdx} className="skill-pill">
                        <span className="skill-icon">
                          <IconComp size={15} />
                        </span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level-tag">{skill.level}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

