function About() {
  return (
    <div className="section-space section-divider">
      <div className="page-container about-grid">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-4 max-w-xl">
            Curious by nature.
            <span className="block text-[var(--accent)]">
              Practical by approach.
            </span>
          </h2>
        </div>

        <div className="about-copy">
          <p>
            I’m Sajib Khan Sabuj, a Computer Science and Engineering student at
            Green University of Bangladesh. I enjoy making web applications
            that solve everyday problems and feel straightforward to use.
          </p>
          <p>
            I learn by building: working through a problem, understanding how
            the pieces fit together, and improving the result one step at a
            time. Right now, I’m deepening my frontend skills while learning
            more about full-stack development.
          </p>
          <a className="text-link inline-flex items-center gap-2" href="#work">
            See what I’ve been building
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
