function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/[0.08] via-white/[0.025] to-cyan-500/[0.06] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Let's connect
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight text-white sm:text-6xl">
                Have an idea?
                <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Let's build it.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-400">
                Whether you have a project idea, collaboration opportunity or
                simply want to connect, feel free to reach out.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <a
                href="mailto:sksabuj653@gmail.com"
                className="rounded-2xl bg-white px-6 py-5 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Email me ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sajib-khan-sabuj-a8436441a/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 px-6 py-5 text-center font-medium text-white transition hover:border-white/20 hover:bg-white/5"
              >
                Connect on LinkedIn ↗
              </a>

              <a
                href="https://github.com/SkSabuj-Web"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 px-6 py-5 text-center font-medium text-white transition hover:border-white/20 hover:bg-white/5"
              >
                Explore GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;