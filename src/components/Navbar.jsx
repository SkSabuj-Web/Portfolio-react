
import { useState } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import cvFile from "../assets/Sajib-Khan-Sabuj-CV.pdf";

function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Work", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    const closeMenu = () => setOpen(false);

    return (
        <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
            <div className="mx-auto max-w-6xl">

                {/* Navbar */}
                <nav
                    className={`relative flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-[#080c1c]/80 px-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:h-16 sm:px-5 ${
                        open ? "rounded-b-xl" : ""
                    }`}
                >

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="group flex items-center gap-2.5"
                    >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-black text-white shadow-lg shadow-violet-500/20 transition duration-300 group-hover:scale-105">
                            S
                        </span>

                        <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
                            Sajib<span className="text-cyan-400">.</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-7 md:flex lg:gap-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-slate-400 transition duration-300 hover:text-white"
                            >
                                {link.name}

                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}

                        {/* Resume */}
                        <a
                            href={cvFile}
                            download="Sajib-Khan-Sabuj-CV.pdf"
                            className="flex items-center gap-1.5 rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                        >
                            Resume
                            <Download size={14} />
                        </a>

                        {/* Let's Talk */}
                        <a
                            href="mailto:sksabuj653@gmail.com"
                            className="group flex items-center gap-1.5 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 transition duration-300 hover:border-violet-400/60 hover:bg-violet-500/20"
                        >
                            Let's talk

                            <ArrowUpRight
                                size={16}
                                className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white active:scale-95 md:hidden"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        {open ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
                        open
                            ? "mt-2 max-h-[500px] opacity-100"
                            : "pointer-events-none max-h-0 opacity-0"
                    }`}
                >
                    <div className="rounded-2xl border border-white/10 bg-[#080c1c]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">

                        {/* Mobile Links */}
                        <div className="space-y-1">
                            {links.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-slate-300 transition duration-200 hover:bg-white/[0.04] hover:text-white active:bg-white/[0.06] ${
                                        index !== links.length - 1
                                            ? "border-b border-white/[0.04]"
                                            : ""
                                    }`}
                                >
                                    <span>{link.name}</span>

                                    <ArrowUpRight
                                        size={15}
                                        className="text-slate-600 transition duration-200 group-hover:text-cyan-400"
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Mobile Actions */}
                        <div className="mt-3 grid grid-cols-2 gap-2">

                            {/* Resume */}
                            <a
                                href={cvFile}
                                download="Sajib-Khan-Sabuj-CV.pdf"
                                onClick={closeMenu}
                                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                            >
                                <Download size={15} />
                                Resume
                            </a>

                            {/* Let's Talk */}
                            <a
                                href="mailto:sksabuj653@gmail.com"
                                onClick={closeMenu}
                                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition duration-300 hover:opacity-90 active:scale-[0.98]"
                            >
                                Let's talk
                                <ArrowUpRight size={15} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

