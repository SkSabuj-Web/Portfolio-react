import projects from "../data/projects";

function Projects() {
  return (
    <section id="work" className="relative overflow-hidden px-4 py-24">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
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

        {/* Projects Grid */}
        <div className="grid gap-7 lg:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-950/30"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

              {/* Preview */}
              <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[#050816]">

                {/* Browser Header */}
                <div className="absolute left-0 right-0 top-0 z-30 flex h-9 items-center gap-1.5 border-b border-white/10 bg-[#080c18]/90 px-4 backdrop-blur-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                  <div className="ml-3 h-5 flex-1 rounded-md bg-white/[0.05]" />
                </div>

                {/* Iframe */}
                <iframe
                  src={project.live}
                  title={project.title}
                  loading="lazy"
                  className="h-full w-full border-0 bg-white pt-9 transition duration-700 group-hover:scale-[1.02]"
                />

                {/* Gradient Overlay */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute bottom-4 left-4 z-30">
                  <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Featured */}
                {project.featured && (
                  <div className="absolute right-4 top-12 z-30">
                    <span className="rounded-full border border-violet-400/20 bg-violet-500/20 px-3 py-1.5 text-xs font-semibold text-violet-200 backdrop-blur-md">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-7">

                <div className="mb-4 flex items-start justify-between gap-4">

                  <h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <span className="text-2xl text-slate-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                <p className="mb-6 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-300"
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
                    className="group/link rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/10"
                  >
                    Live Demo
                    <span className="ml-2 inline-block transition group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5">
                      ↗
                    </span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    GitHub ↗
                  </a>

                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 group-hover:w-2/3" />

            </article>
          ))}

        </div>

        {/* Bottom */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            More projects are coming as I continue building and learning.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;