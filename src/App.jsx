
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!("IntersectionObserver" in window) || reducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -24px 0px", threshold: 0.1 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Navbar />

      <main id="main-content">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24 reveal-on-scroll">
          <About />
        </section>

        <section id="skills" className="scroll-mt-24 reveal-on-scroll">
          <Skills />
        </section>

        <section id="work" className="scroll-mt-24 reveal-on-scroll">
          <Projects />
        </section>

        <section id="experience" className="scroll-mt-24 reveal-on-scroll">
          <Resume />
        </section>

        <section id="contact" className="scroll-mt-24 reveal-on-scroll">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
