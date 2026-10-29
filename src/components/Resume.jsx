function Resume() {
  return (
    <div className="section-space section-divider">
      <div className="page-container">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Learning journey</p>
            <h2 className="section-title mt-4">Learning through practice.</h2>
          </div>
          <p className="section-copy section-heading-aside">
            I’m building a strong foundation while turning what I learn into
            practical projects.
          </p>
        </div>

        <div className="journey-grid">
          <article className="journey-card surface-card">
            <span className="journey-index">01</span>
            <div>
              <p className="journey-label">Education</p>
              <h3>BSc in Computer Science &amp; Engineering</h3>
              <p className="journey-detail">
                Green University of Bangladesh
              </p>
            </div>
          </article>

          <article className="journey-card journey-card-accent">
            <span className="journey-index">02</span>
            <div>
              <p className="journey-label">Project-based learning</p>
              <h3>Building across the stack</h3>
              <p className="journey-detail">
                Exploring responsive interfaces, APIs, authentication, and
                data-backed features through personal and student projects.
              </p>
              <a className="text-link inline-flex items-center gap-2" href="#work">
                Browse my projects
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="journey-card surface-card">
            <span className="journey-index">03</span>
            <div>
              <p className="journey-label">Current focus</p>
              <h3>Stronger fundamentals, better products</h3>
              <p className="journey-detail">
                Improving programming fundamentals, writing clearer code, and
                learning how frontend and backend systems work together.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Resume;
