import "./app.scss"

import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
      </section>
    <section id="Resume"><Parallax type="services" /></section>
    <section id="Projects"><Services /></section>
    {/* <section ><Parallax  type="portfolio"/></section> */}
    {/* <Portfolio /> */}
    <section id="Contact"><Contact /></section>
    </div>;
};

export default App;
