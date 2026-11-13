import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { ExternalLink, Sparkles, Server, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Github } from "../Common/Icons";
import "./Projects.scss";

const categories = [
  "All",
  "Enterprise SaaS",
  "Real-Time Gaming Platform",
  "Developer Tools",
  "Frontend Architecture",
  "Marketplace Platform"
];

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">03 // Featured Projects</div>
          <h2 className="section-title">
            Engineered for <span className="gradient-text">Scale & Reliability</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of industrial platforms, real-time WebSocket applications, and full-stack solutions built with modern architectural standards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Showcase */}
        <motion.div layout className="projects-bento-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`bento-card project-card ${project.featured ? "featured-card" : ""}`}
              >
                <div className="project-top-row">
                  <div className="category-meta">
                    <span className="project-category">{project.category}</span>
                    {project.featured && (
                      <span className="featured-pill">
                        <Sparkles size={12} />
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-icon"
                        aria-label={`View ${project.title} on GitHub`}
                        title="View Source on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-icon"
                        aria-label={`Open live demo of ${project.title}`}
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <div className="project-metrics-badge">
                  <Server size={13} />
                  <span>{project.metrics}</span>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Achievements List */}
                <ul className="project-achievements">
                  {project.achievements.map((ach, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} className="check-icon" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="project-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
