function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-600 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} Sajib Khan Sabuj. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/SkSabuj-Web"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sajib-khan-sabuj-a8436441a/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;