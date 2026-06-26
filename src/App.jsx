import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Services />

      <Projects />

      <Certifications />

      <Contact />

      <Footer />

    </div>
  );
}