import { useEffect, useRef } from "react";
import Breadcrumbs from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  backgroundImage: string;
  breadcrumbs: { label: string; href?: string }[];
}

function PageHeader({
  title,
  eyebrow,
  backgroundImage,
  breadcrumbs
}: PageHeaderProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrolled = window.scrollY;
      // Soft parallax shift
      imageRef.current.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="page-header-banner">
      <div className="page-header-overlay" />
      <div className="page-header-image">
        <img
          ref={imageRef}
          src={backgroundImage}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="container-studio page-header-content">
        <div className="max-width-800">
          {eyebrow && (
            <span className="eyebrow" style={{ color: "var(--color-secondary-soft)" }} data-aos="fade-up">
              {eyebrow}
            </span>
          )}
          <h1 className="page-header-title display-title" data-aos="fade-up" data-aos-delay="100">
            {title}
          </h1>
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
