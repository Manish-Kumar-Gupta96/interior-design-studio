import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import StudioButton from "../common/StudioButton";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  const isLightBgPage = ["/about", "/services", "/contact"].includes(location.pathname);

  return (
    <>
      <header
        className={`site-header ${scrolled ? "site-header-scrolled" : ""} ${isLightBgPage ? "site-header-light-bg" : ""}`}
      >
        <div className="container-studio">
          <div className="site-header-inner">
            <Link
              to="/"
              className="site-logo"
              aria-label="Atelier Interior Design Studio home"
            >
              <span className="site-logo-main">ATELIER</span>
              <span className="site-logo-sub">INTERIOR DESIGN</span>
            </Link>

            <nav className="desktop-navigation" aria-label="Main navigation">
              <ul>
                <li>
                  <Link
                    to="/projects"
                    className={isActive("/projects") ? "is-active" : ""}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={isActive("/about") ? "is-active" : ""}
                  >
                    Studio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={isActive("/services") ? "is-active" : ""}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/journal"
                    className={isActive("/journal") ? "is-active" : ""}
                  >
                    Journal
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="site-header-actions">
              <StudioButton
                href="/contact"
                className="header-cta"
                variant="dark"
              >
                Start a Project
              </StudioButton>

              <button
                type="button"
                className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Header;
