import { ArrowUpRight, Code2, Link2, Mail } from "lucide-react";

function Contact() {
  return (
    <div className="section-space section-divider">
      <div className="page-container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="section-kicker">Get in touch</p>
            <h2 className="section-title mt-4">
              Have something good in mind?
            </h2>
            <p className="section-copy mt-5 max-w-xl">
              I’m always glad to talk about useful ideas, web projects, and
              opportunities to learn and contribute.
            </p>
            <a className="button button-primary mt-7" href="mailto:sksabuj653@gmail.com">
              <Mail aria-hidden="true" size={17} />
              Email me
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>

          <div className="contact-details surface-card">
            <p className="contact-details-label">Find me online</p>
            <a className="contact-detail-link" href="mailto:sksabuj653@gmail.com">
              <Mail aria-hidden="true" size={18} />
              <span>sksabuj653@gmail.com</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a
              className="contact-detail-link"
              href="https://github.com/SkSabuj-Web"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 aria-hidden="true" size={18} />
              <span>GitHub</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a
              className="contact-detail-link"
              href="https://www.linkedin.com/in/sajib-khan-sabuj-a8436441a/"
              target="_blank"
              rel="noreferrer"
            >
              <Link2 aria-hidden="true" size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
