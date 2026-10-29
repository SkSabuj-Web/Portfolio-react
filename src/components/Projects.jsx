import { useState } from "react";
import {
  ArrowUpRight,
  Atom,
  Blocks,
  Code2,
  Coffee,
  Dumbbell,
  Globe2,
  Newspaper,
  ShoppingBasket,
  Users,
} from "lucide-react";
import projects from "../data/projects";

const filters = ["All", "Frontend", "Full-stack"];
const projectIcons = {
  market: ShoppingBasket,
  news: Newspaper,
  fitness: Dumbbell,
  builder: Blocks,
  community: Users,
  explorer: Globe2,
  physics: Atom,
  coffee: Coffee,
};

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter,
  );

  return (
    <div className="section-space section-divider">
      <div className="page-container">
        <div className="section-heading-row projects-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title mt-4 max-w-2xl">
              Real projects. Useful things learned.
            </h2>
          </div>
          <p className="section-copy section-heading-aside">
            A selection of applications and websites built to explore
            development ideas, solve practical problems, and keep improving.
          </p>
        </div>

        <div className="project-controls">
          <div className="filter-list" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                className="filter-button"
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="project-count" aria-live="polite">
            {visibleProjects.length} projects
          </p>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article
              className={`project-card${project.featured ? " project-card-featured" : ""}${project.featured && index === 0 ? " project-card-lead" : ""}`}
              key={project.title}
            >
              <div
                className={`project-art project-art-${project.preview}`}
              >
                <div className="project-art-placeholder" aria-hidden="true">
                  <span className="project-art-index">
                    PROJECT / {String(projects.indexOf(project) + 1).padStart(2, "0")}
                  </span>
                  <div className="project-art-symbol">
                    {(() => {
                      const Icon = projectIcons[project.preview];
                      return <Icon size={38} strokeWidth={1.35} />;
                    })()}
                  </div>
                  <span className="project-art-caption">{project.title}</span>
                </div>
                {project.screenshot && (
                  <img
                    className="project-preview-image"
                    src={project.screenshot}
                    alt={`Screenshot of the ${project.title} website`}
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                    }}
                  />
                )}
              </div>

              <div className="project-card-content">
                <div className="project-card-topline">
                  <span className="project-number">{project.category}</span>
                  {project.featured && (
                    <span className="project-featured-label">Featured work</span>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-tech-list" aria-label="Technologies">
                  {project.tech.map((technology) => (
                    <li className="project-badge" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <a
                  className="project-action project-action-primary"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title} live demo (opens in a new tab)`}
                >
                  Live demo
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
                <a
                  className="project-action project-action-secondary"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.github === "https://github.com/SkSabuj-Web" ? "GitHub profile" : "Source code"} for ${project.title} (opens in a new tab)`}
                >
                  <Code2 aria-hidden="true" size={16} />
                  {project.github === "https://github.com/SkSabuj-Web"
                    ? "GitHub"
                    : "Source code"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
