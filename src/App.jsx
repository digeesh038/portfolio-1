import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import About from "./components/about/About";

const App = () => {
  return <div>
    <section id="Homepage"><Navbar /><Hero /></section>
    <section id="Resume"><Parallax type="services" /></section>
    <section id="Projects"><Services /></section>
    <section id="About"><About /></section>
    <section id="Contact"><Contact /></section>
  </div>;
};

export default App;