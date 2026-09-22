
import { useEffect, useState } from "react";
import {
    Menu,
    X,
    ArrowUpRight,
    Download,
} from "lucide-react";
import cvFile from "../assets/Sajib-Khan-Sabuj-CV.pdf";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const links = [
        { name: "Work", href: "#work", id: "work" },
        { name: "About", href: "#about", id: "about" },
        { name: "Experience", href: "#experience", id: "experience" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    /* --------------------------------
       Scroll Detection
    -------------------------------- */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /* --------------------------------
       Active Section Detection
    -------------------------------- */
    useEffect(() => {
        const sections = ["home", "work", "about", "experience", "contact"];

        const handleSection = () => {
            const scrollPosition = window.scrollY + 180;

            let currentSection = "home";

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);

                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = sectionId;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleSection);

        handleSection();

        return () => {
            window.removeEventListener("scroll", handleSection);
        };
    }, []);

    /* --------------------------------
       Close Menu on Escape
    -------------------------------- */
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    /* --------------------------------
       Prevent Body Scroll on Mobile Menu
    -------------------------------- */
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    /* --------------------------------
       Close Menu
    -------------------------------- */
    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 px-3 transition-all duration-300 sm:px-4 ${scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-4"
                }`}
        >
            <div className="mx-auto max-w-6xl">

                {/* =========================
                    NAVBAR
                ========================== */}
                <nav
                    className={`relative flex items-center justify-between border backdrop-blur-xl transition-all duration-300 ${scrolled
                        ? "h-14 rounded-xl border-white/15 bg-[#080c1c]/95 px-3 shadow-2xl shadow-black/30 sm:h-15 sm:px-5"
                        : "h-14 rounded-2xl border-white/10 bg-[#080c1c]/80 px-3 shadow-2xl shadow-black/20 sm:h-16 sm:px-5"
                        }`}
                >

                    {/* =========================
                        LOGO
                    ========================== */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="group flex items-center gap-2.5"
                    >
                        <span
                            className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black text-white shadow-lg shadow-violet-500/20 transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 ${scrolled
                                ? "h-8 w-8 text-xs"
                                : "h-9 w-9 text-sm"
                                }`}
                        >
                            S
                        </span>

                        <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
                            Sajib
                            <span className="text-cyan-400">.</span>
                        </span>
                    </a>

                    {/* =========================
                        DESKTOP MENU
                    ========================== */}
                    <div className="hidden items-center gap-6 md:flex lg:gap-8">

                        {links.map((link) => {
                            const isActive =
                                activeSection === link.id;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`group relative py-2 text-sm font-medium transition-all duration-300 ${isActive
                                        ? "text-white"
                                        : "text-slate-400 hover:text-white"
                                        }`}
                                >
                                    {link.name}

                                    {/* Active / Hover Line */}
                                    <span
                                        className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 ${isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    />

                                    {/* Active Dot */}
                                    {isActive && (
                                        <span className="absolute -right-2 top-1 h-1 w-1 rounded-full bg-cyan-400" />
                                    )}
                                </a>
                            );
                        })}

                        {/* =========================
                            RESUME
                        ========================== */}
                        <a
                            href={cvFile}
                            download="Sajib-Khan-Sabuj-CV.pdf"
                            className="flex items-center gap-1.5 rounded-xl border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                        >
                            Resume
                            <Download size={14} />
                        </a>

                        {/* =========================
                            LET'S TALK
                        ========================== */}
                        <a
                            href="mailto:sksabuj653@gmail.com"
                            className="group flex items-center gap-1.5 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/20 hover:text-white"
                        >
                            Let's talk

                            <ArrowUpRight
                                size={16}
                                className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>

                    {/* =========================
                        MOBILE BUTTON
                    ========================== */}
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 active:scale-95 md:hidden ${open
                            ? "border-violet-400/30 bg-violet-500/10 text-white"
                            : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
                            }`}
                        aria-label={
                            open ? "Close menu" : "Open menu"
                        }
                        aria-expanded={open}
                    >
                        {open ? (
                            <X size={21} />
                        ) : (
                            <Menu size={21} />
                        )}
                    </button>
                </nav>

                {/* =========================
                    MOBILE OVERLAY
                ========================== */}
                {open && (
                    <button
                        onClick={closeMenu}
                        aria-label="Close mobile menu"
                        className="fixed inset-0 top-[70px] -z-10 bg-black/40 backdrop-blur-[2px] md:hidden"
                    />
                )}

                {/* =========================
                    MOBILE MENU
                ========================== */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${open
                        ? "mt-2 max-h-[520px] translate-y-0 opacity-100"
                        : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
                        }`}
                >
                    <div className="rounded-2xl border border-white/10 bg-[#080c1c]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">

                        {/* Mobile Links */}
                        <div className="space-y-1">
                            {links.map((link) => {
                                const isActive =
                                    activeSection === link.id;

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${isActive
                                            ? "bg-cyan-400/5 text-cyan-300"
                                            : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">

                                            {/* Active Indicator */}
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full transition-all ${isActive
                                                    ? "bg-cyan-400 shadow-lg shadow-cyan-400/50"
                                                    : "bg-slate-700 group-hover:bg-slate-500"
                                                    }`}
                                            />

                                            <span>{link.name}</span>
                                        </div>

                                        <ArrowUpRight
                                            size={15}
                                            className={`transition-all duration-200 ${isActive
                                                ? "text-cyan-400"
                                                : "text-slate-600 group-hover:text-cyan-400"
                                                } group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
                                        />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Divider */}
                        <div className="my-3 h-px bg-white/5" />

                        {/* Mobile Actions */}
                        <div className="grid grid-cols-2 gap-2">

                            {/* Resume */}
                            <a
                                href={cvFile}
                                download="Sajib-Khan-Sabuj-CV.pdf"
                                onClick={closeMenu}
                                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300 active:scale-[0.98]"
                            >
                                <Download size={15} />
                                Resume
                            </a>

                            {/* Let's Talk */}
                            <a
                                href="mailto:sksabuj653@gmail.com"
                                onClick={closeMenu}
                                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                            >
                                Let's talk
                                <ArrowUpRight size={15} />
                            </a>
                        </div>

                        {/* Mobile Hint */}
                        <p className="mt-3 text-center text-[10px] tracking-wide text-slate-600">
                            Press ESC to close
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

