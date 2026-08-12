import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import StudioButton from "../common/StudioButton";
import { headerLinks } from "../../data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("is-menu-open");

      const timeline = gsap.timeline();
      timeline
        .set(".mobile-menu", {
          visibility: "visible"
        })
        .to(".mobile-menu", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.6,
          ease: "power4.inOut"
        })
        .fromTo(
          ".mobile-menu-link",
          {
            y: 40,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.5,
            ease: "power3.out"
          },
          "-=0.25"
        );
    } else {
      document.body.classList.remove("is-menu-open");

      gsap.to(".mobile-menu", {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        duration: 0.5,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(".mobile-menu", {
            visibility: "hidden"
          });
        }
      });
    }

    return () => {
      document.body.classList.remove("is-menu-open");
    };
  }, [isOpen]);

  return (
    <div className="mobile-menu" aria-hidden={!isOpen}>
      <div className="mobile-menu-inner">
        <div className="mobile-menu-header">
          <span className="mobile-menu-label">Navigation</span>
          <button
            type="button"
            className="mobile-menu-close"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="mobile-menu-navigation" aria-label="Mobile navigation">
          <ul>
            {headerLinks.map((item, index) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="mobile-menu-link"
                  onClick={onClose}
                >
                  <span className="mobile-menu-number">0{index + 1}</span>
                  <span className="mobile-menu-text">{item.label}</span>
                  <span className="mobile-menu-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <div className="mobile-menu-footer-info">
            <span>Start a project</span>
            <a href="mailto:hello@atelierstudio.com">hello@atelierstudio.com</a>
          </div>
          <StudioButton
            href="/contact"
            variant="light"
            onClick={onClose}
          >
            Let's Talk
          </StudioButton>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
