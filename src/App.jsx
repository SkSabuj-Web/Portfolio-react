
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Navbar />

      <main>
        {/* Home */}
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        {/* Projects / Work */}
        <section id="work" className="scroll-mt-24">
          <Projects />
        </section>

        {/* Resume / Experience */}
        <section id="experience" className="scroll-mt-24">
          <Resume />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

