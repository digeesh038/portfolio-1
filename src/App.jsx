import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import DotGrid from "./components/DotGrid/DotGrid";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/index.scss";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className="portfolio-app">
      {/* Fullscreen Interactive DotGrid Background */}
      <div className="dotgrid-fixed-container" aria-hidden="true">
        <DotGrid
          baseColor="#ffffff"
          activeColor="#C6FF00"
          shape="circle"
          dotSize={4}
          gap={12}
          proximity={140}
          strength={1}
          bounce={0.6}
          tension={0.4}
          returnDuration={0.8}
          shockRadius={320}
          shockStrength={5}
          swell={0.8}
          stretch={0.5}
          glow={0.5}
          fade={0}
          opacity={0.05 }
          intro={true}
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
