function Resume() {
  return (
    <section id="experience" className="border-t border-white/5 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Experience & Education
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            My journey so far.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Education
            </p>

            <div className="mt-8 space-y-8">
              <div className="border-l border-violet-400/30 pl-6">
                <p className="text-xs text-slate-500">Current</p>
                <h3 className="mt-2 text-lg font-bold text-white">
                  BSc in Computer Science & Engineering
                </h3>
                <p className="mt-1 text-sm text-cyan-400">
                  Green University of Bangladesh
                </p>
              </div>

              <div className="border-l border-white/10 pl-6">
                <h3 className="text-lg font-bold text-white">
                  Higher Secondary Certificate
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Milestone College
                </p>
              </div>

              <div className="border-l border-white/10 pl-6">
                <h3 className="text-lg font-bold text-white">
                  Secondary School Certificate
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Milestone School and College
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Experience
            </p>

            <div className="mt-8">
              <div className="border-l border-cyan-400/30 pl-6">
                <p className="text-xs text-slate-500">2025 — Present</p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  Senior Front End Developer
                </h3>

                <p className="mt-1 text-sm text-cyan-400">
                  MJPSC Club · Green University of Bangladesh
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Working on modern web interfaces and student-focused digital
                  experiences while developing practical frontend development
                  skills.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-violet-400/10 bg-violet-500/[0.04] p-5">
              <p className="text-sm leading-7 text-slate-400">
                Currently focused on becoming a stronger full-stack developer
                through real-world projects and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;