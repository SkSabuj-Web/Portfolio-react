import projects from "../data/projects";

function Projects() {
  return (
    <section id="work" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Projects I’m proud to build.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-400">
            A collection of projects where I explored frontend development,
            responsive design, APIs, authentication and modern web technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] transition duration-500 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-950/30 ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              {/* Preview */}
              <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[#050816]">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/10" />

                <iframe
                  src={project.live}
                  title={project.title}
                  loading="lazy"
                  className="relative z-10 h-full w-full border-0 bg-white"
                />

                {/* Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 z-30">
                  <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white transition group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <span className="shrink-0 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mb-6 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            More projects are coming as I continue building and learning.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;