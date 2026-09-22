const skills = [
  {
    name: "JavaScript",
    category: "Language",
    level: "Core",
  },
  {
    name: "React",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    level: "Primary",
  },
  {
    name: "Supabase",
    category: "Backend",
    level: "Working",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    level: "Daily",
  },
  {
    name: "Python",
    category: "Language",
    level: "Learning",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    level: "Core",
  },
  {
    name: "MySQL",
    category: "Database",
    level: "Working",
  },
];

function Skills() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Tech stack
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Tools I build with.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            A growing toolkit focused on modern frontend development,
            backend integration and practical product building.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-xs font-bold text-cyan-300">
                  0{index + 1}
                </span>

                <span className="text-[10px] uppercase tracking-wider text-slate-600">
                  {skill.level}
                </span>
              </div>

              <h3 className="mt-7 text-lg font-bold text-white">
                {skill.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;