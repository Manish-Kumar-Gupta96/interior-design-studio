import { Link } from "react-router-dom";
import StudioButton from "../common/StudioButton";
import { footerLinks, socialLinks } from "../../data/navigation";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-studio">
        <div className="footer-grid">
          
          <div className="footer-brand-col" data-aos="fade-up">
            <Link to="/" className="site-logo">
              <span className="footer-logo">ATELIER</span>
              <span className="footer-logo-sub">INTERIOR DESIGN</span>
            </Link>
            <p className="mt-4" style={{ maxWidth: "280px" }}>
              Creating refined, timeless, and deeply personal architectural interior spaces.
            </p>
            <StudioButton href="/contact" variant="light" className="mt-4">
              Get in Touch
            </StudioButton>
          </div>

          <div className="footer-col" data-aos="fade-up" data-aos-delay="100">
            <span className="footer-col-title">Explore</span>
            <ul className="footer-nav-list">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col" data-aos="fade-up" data-aos-delay="200">
            <span className="footer-col-title">Connect</span>
            <ul className="footer-nav-list">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.platform}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:hello@atelierstudio.com">hello@atelierstudio.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-col" data-aos="fade-up" data-aos-delay="300">
            <span className="footer-col-title">Studio</span>
            <div className="footer-address">
              <address>
                24A, Design District<br />
                Bandra West, Mumbai<br />
                400050, India
              </address>
              <a href="tel:+912240000000" className="footer-phone">
                +91 22 4000 0000
              </a>
              <div className="mt-2 text-muted" style={{ fontSize: "var(--fs-xs)" }}>
                Mon – Fri: 10:00 – 18:00
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {currentYear} Atelier Design Studio. All rights reserved.
          </span>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
