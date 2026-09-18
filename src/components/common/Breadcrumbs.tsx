import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-nav mt-3" data-aos="fade-up" data-aos-delay="150">
      <ol 
        className="flex items-center gap-2 flex-wrap"
        style={{ fontSize: "var(--fs-xs)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}
      >
        <li>
          <Link to="/" className="hover-link" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color var(--transition-base)" }}>
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2" style={{ color: "rgba(255, 255, 255, 0.4)" }}>
              <span>/</span>
              {isLast || !item.href ? (
                <span className="text-serif" style={{ color: "var(--color-accent)", textTransform: "none", fontStyle: "italic" }}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className="hover-link" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color var(--transition-base)" }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <style>{`
        .hover-link:hover {
          color: var(--color-white) !important;
        }
      `}</style>
    </nav>
  );
}

export default Breadcrumbs;
