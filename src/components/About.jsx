function About() {
  return (
    <section id="about" className="border-t border-white/5 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About me
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Turning ideas into
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                useful products.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-400">
              I'm Sajib Khan Sabuj, a Computer Science student at Green
              University of Bangladesh and an aspiring full-stack web
              developer. I enjoy creating modern, responsive and practical
              web applications.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-500">
              My current focus is React, modern frontend development and
              backend technologies such as Supabase. I like learning by
              building real projects and turning ideas into working products.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["01+", "Years Learning"],
                ["10+", "Projects"],
                ["06+", "Technologies"],
                ["CSE", "Student"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;