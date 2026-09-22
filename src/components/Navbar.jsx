import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import cvFile from "../assets/Sajib-Khan-Sabuj-CV.pdf";

function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Work", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
            <div className="mx-auto max-w-6xl">
                <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#080c1c]/75 px-5 shadow-2xl shadow-black/20 backdrop-blur-xl">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="group flex items-center gap-2"
                        onClick={() => setOpen(false)}
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-black text-white shadow-lg shadow-violet-500/20">
                            S
                        </span>

                        <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
                            Sajib<span className="text-cyan-400">.</span>
                        </span>
                    </a>

                    {/* Desktop */}
                    <div className="hidden items-center gap-8 md:flex">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-slate-400 transition hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={cvFile}
                            download="Sajib-Khan-Sabuj-CV.pdf"
                            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                        >
                            Resume ↓
                        </a>

                        <a
                            href="mailto:sksabuj653@gmail.com"
                            className="group flex items-center gap-1.5 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 transition hover:border-violet-400/60 hover:bg-violet-500/20"
                        >
                            Let's talk
                            <span className="text-lg transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                ↗
                            </span>
                        </a>
                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded-xl border border-white/10 p-2 text-slate-300 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </nav>

                {open && (
                    <div className="mt-2 rounded-2xl border border-white/10 bg-[#080c1c]/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
                        <div className="flex flex-col">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="border-b border-white/5 px-3 py-3.5 text-sm text-slate-300 transition hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <a
                                href="mailto:sksabuj653@gmail.com"
                                className="mt-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white"
                            >
                                Let's talk
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;