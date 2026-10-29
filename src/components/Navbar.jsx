import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import cvFile from "../assets/Sajib-Khan-Sabuj-CV.pdf";

const links = [
  { name: "Projects", href: "#work", id: "work" },
  { name: "About", href: "#about", id: "about" },
  { name: "Stack", href: "#skills", id: "skills" },
  { name: "Journey", href: "#experience", id: "experience" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButtonRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const sectionIds = [
      "home",
      "about",
      "skills",
      "work",
      "experience",
      "contact",
    ];

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.scrollY + 150;
        let current = "home";

        sectionIds.forEach((id) => {
          const section = document.getElementById(id);
          if (section && section.offsetTop <= marker) current = id;
        });

        setActiveSection(current);
      });
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktopViewport = window.matchMedia("(min-width: 1080px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    desktopViewport.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      desktopViewport.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="page-container">
        <nav className="site-nav" aria-label="Main navigation">
          <a
            href="#home"
            className="brand-link"
            aria-label="Sajib Khan Sabuj — home"
            onClick={closeMenu}
          >
            <span className="brand-mark" aria-hidden="true">
              S
            </span>
            <span>
              <span className="brand-name">Sajib Khan Sabuj</span>
            <span className="brand-caption">CSE student · Web development</span>
            </span>
          </a>

          <div className="desktop-nav">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="nav-link"
                aria-current={
                  activeSection === link.id ? "location" : undefined
                }
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mobile-nav-link"
              aria-current={activeSection === "contact" ? "location" : undefined}
              onClick={closeMenu}
            >
              Contact
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a
              href="#contact"
              className="button button-primary nav-contact"
            >
              Let’s talk
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>

          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X aria-hidden="true" size={21} />
            ) : (
              <Menu aria-hidden="true" size={21} />
            )}
          </button>
        </nav>

        {open && (
          <button
            type="button"
            className="mobile-backdrop"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
        )}

        <div
          id="mobile-navigation"
          className={`mobile-navigation${open ? " is-open" : ""}`}
          aria-hidden={!open}
          inert={!open}
        >
          <div className="mobile-navigation-inner">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="mobile-nav-link"
                aria-current={
                  activeSection === link.id ? "location" : undefined
                }
                onClick={closeMenu}
              >
                {link.name}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ))}
            <a
              href={cvFile}
              download="Sajib-Khan-Sabuj-CV.pdf"
              className="button button-secondary mobile-resume"
              onClick={closeMenu}
            >
              <Download aria-hidden="true" size={16} />
              Download resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
