import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";
import { Github, Linkedin, Twitter } from "../Common/Icons";
import "./contact.scss";

const Contact = () => {
  const { personal, contact } = portfolioData;
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const formData = new FormData(formRef.current);
    formData.append("access_key", contact.accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        formRef.current.reset();
        setTimeout(() => setSuccess(false), 6000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">06 // Connect</div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you are hiring for full-time engineering roles, looking for a full-stack developer in Bangalore, or seeking a technical collaborator, my inbox is open.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Left Column: Direct Info Card */}
          <motion.div
            className="bento-card contact-info-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="info-card-header">
              <h3>Contact Details</h3>
              <p>Reach out directly or send a message through the verified form.</p>
            </div>

            <div className="contact-items">
              {/* Email item with one-click copy */}
              <div className="contact-item">
                <div className="item-icon"><Mail size={18} /></div>
                <div className="item-text">
                  <span className="item-label">Direct Email</span>
                  <a href={`mailto:${personal.email}`} className="item-val">{personal.email}</a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location item */}
              <div className="contact-item">
                <div className="item-icon"><MapPin size={18} /></div>
                <div className="item-text">
                  <span className="item-label">Current Base</span>
                  <span className="item-val">{contact.location}</span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="contact-socials-box">
              <span className="socials-title">Follow & Connect</span>
              <div className="social-pill-list">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <Twitter size={16} />
                  <span>Twitter / X</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            className="bento-card contact-form-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alex Morgan"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. alex@company.com"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject / Purpose</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="e.g. Full-Stack Engineering Role / Project Inquiry"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Share a brief overview of your team, role, or project..."
                  disabled={loading}
                />
              </div>

              <button type="submit" disabled={loading} className="submit-btn">
                <span>{loading ? "Transmitting Message..." : "Send Message"}</span>
                <Send size={16} />
              </button>

              {success && (
                <div className="form-alert success">
                  <CheckCircle2 size={18} />
                  <span>Thank you! Your message was transmitted successfully. I will get back to you shortly.</span>
                </div>
              )}

              {error && (
                <div className="form-alert error">
                  <AlertCircle size={18} />
                  <span>Unable to send message right now. Please email directly at digeesh038@gmail.com.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
