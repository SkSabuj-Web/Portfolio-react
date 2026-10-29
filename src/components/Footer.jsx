import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-content">
        <p>© {new Date().getFullYear()} Sajib Khan Sabuj</p>
        <p className="footer-note">Built with care and a little curiosity.</p>
        <div className="footer-links">
          <a
            href="https://github.com/SkSabuj-Web"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRight aria-hidden="true" size={13} />
          </a>
          <a
            href="https://www.linkedin.com/in/sajib-khan-sabuj-a8436441a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRight aria-hidden="true" size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
