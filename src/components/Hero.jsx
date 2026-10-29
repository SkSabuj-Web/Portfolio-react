import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import profileImage from "../assets/profile.jpg";
import cvFile from "../assets/Sajib-Khan-Sabuj-CV.pdf";

function Hero() {
  return (
    <div className="page-container section-space">
      <div className="hero-grid">
        <div className="max-w-3xl hero-entrance">
          <p className="eyebrow">Aspiring software engineer</p>

          <h1 className="hero-title mt-5">
            Turning Ideas Into{" "}
            <span className="hero-title-highlight">Digital Experiences.</span>
          </h1>

          <p className="section-copy mt-6 max-w-2xl">
            I’m Sajib Khan Sabuj, an aspiring software engineer and CSE student
            building useful web applications as I grow into a full-stack
            developer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button button-primary" href="#work">
              Explore My Work
              <ArrowDown aria-hidden="true" size={16} />
            </a>
            <a className="button button-secondary" href="#contact">
              Let's Connect
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a
              className="button button-secondary"
              href={cvFile}
              download="Sajib-Khan-Sabuj-CV.pdf"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              className="social-link"
              href="https://github.com/SkSabuj-Web"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 aria-hidden="true" size={17} />
              GitHub
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/sajib-khan-sabuj-a8436441a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>

        <div className="hero-portrait-wrap hero-entrance">
          <div className="portrait-frame hero-portrait">
            <img
              src={profileImage}
              alt="Portrait of Sajib Khan Sabuj"
              className="h-full w-full object-cover object-top"
              fetchPriority="high"
            />
          </div>
          <div className="hero-art-note">
            <Code2 aria-hidden="true" size={16} />
            <span>Built with intent</span>
          </div>
          <div className="hero-caption">
            <span className="hero-caption-mark" aria-hidden="true">
              SK
            </span>
            <div>
              <p className="font-semibold text-[var(--ink)]">
                Sajib Khan Sabuj
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                CSE student · Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>Learning by building</span>
        <span aria-hidden="true" className="hero-bottom-line" />
        <a href="#about" className="hero-scroll-link">
          A little about me
          <ArrowDown aria-hidden="true" size={15} />
        </a>
      </div>
    </div>
  );
}

export default Hero;
