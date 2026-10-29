
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
  return (
    <div className="site-shell">
      <Navbar />

      <main id="main-content">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="work" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Resume />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
