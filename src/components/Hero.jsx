import profileImage from "../assets/profile.jpg";
import cvFile from "../assets/Sajib-Khan-Sabuj-CV.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 animate-pulse rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="absolute bottom-10 right-1/4 h-72 w-72 animate-pulse rounded-full bg-cyan-500/10 blur-[120px] [animation-delay:1s]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">

          {/* LEFT CONTENT */}
          <div className="animate-[fadeInUp_.8s_ease-out_both]">

            {/* Status */}
            <div className="mb-7 inline-flex animate-[fadeInUp_.7s_ease-out_both] items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              Available for opportunities
            </div>

            <p className="mb-4 animate-[fadeInUp_.7s_.1s_ease-out_both] text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Hello, I'm Sajib
            </p>

            <h1 className="max-w-4xl animate-[fadeInUp_.8s_.2s_ease-out_both] text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                digital experiences
              </span>{" "}
              that matter.
            </h1>

            <p className="mt-7 max-w-2xl animate-[fadeInUp_.8s_.3s_ease-out_both] text-base leading-8 text-slate-400 sm:text-lg">
              I'm an aspiring Full-Stack Web Developer and CSE student who
              enjoys turning ideas into modern, responsive and useful web
              applications.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex animate-[fadeInUp_.8s_.4s_ease-out_both] flex-wrap items-center gap-4">

              <a
                href="#work"
                className="group rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Explore my work
                <span className="ml-2 inline-block transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>

              <a
                href={cvFile}
                download="Sajib-Khan-Sabuj-CV.pdf"
                className="group rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/10"
              >
                Download CV
                <span className="ml-2 inline-block text-violet-300 transition duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex animate-[fadeInUp_.8s_.5s_ease-out_both] items-center gap-6 text-sm">
              <a
                href="https://github.com/SkSabuj-Web"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sajib-khan-sabuj-a8436441a/"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex animate-[fadeInUp_.8s_.6s_ease-out_both] flex-wrap gap-8 border-t border-white/10 pt-8">
              <div className="transition duration-300 hover:-translate-y-1">
                <p className="text-2xl font-bold text-white">01+</p>
                <p className="mt-1 text-xs text-slate-500">
                  Years Learning
                </p>
              </div>

              <div className="transition duration-300 hover:-translate-y-1">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="mt-1 text-xs text-slate-500">
                  Projects
                </p>
              </div>

              <div className="transition duration-300 hover:-translate-y-1">
                <p className="text-2xl font-bold text-white">08+</p>
                <p className="mt-1 text-xs text-slate-500">
                  Technologies
                </p>
              </div>
            </div>
          </div>

          {/* PROFILE */}
          <div className="relative mx-auto w-full max-w-md animate-[fadeInRight_1s_.3s_ease-out_both] lg:ml-auto">

            <div className="absolute -inset-6 animate-pulse rounded-[3rem] bg-gradient-to-r from-violet-600/20 to-cyan-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-violet-950/30">

              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={profileImage}
                  alt="Sajib Khan Sabuj"
                  className="aspect-[4/5] w-full object-cover object-center transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                      Full-Stack Developer
                    </p>

                    <p className="mt-1 text-lg font-semibold text-white">
                      Sajib Khan Sabuj
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-5 top-16 hidden animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#0b1020]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
              <p className="text-xs text-slate-500">Currently learning</p>
              <p className="mt-1 text-sm font-semibold text-white">
                React + Full Stack
              </p>
            </div>

            <div className="absolute -right-5 bottom-20 hidden animate-[float_4s_1s_ease-in-out_infinite] rounded-2xl border border-cyan-400/20 bg-[#0b1020]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
              <p className="text-xs text-slate-500">Based in</p>
              <p className="mt-1 text-sm font-semibold text-cyan-300">
                Bangladesh 🇧🇩
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-500 transition hover:text-white md:block"
        aria-label="Scroll to about section"
      >
        ↓
      </a>
    </section>
  );
}

export default Hero;