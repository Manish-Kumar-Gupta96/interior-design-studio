import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import StudioButton from "../../components/common/StudioButton";
import ImageReveal from "../../components/common/ImageReveal";

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIdx = projects.findIndex((p) => p.id === id);
  const project = projects[currentIdx];

  // Auto scroll to top on param change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="container-studio py-32 text-center">
        <span className="eyebrow mb-4">Error 404</span>
        <h2 className="display-title mb-8">Project Not Found</h2>
        <StudioButton href="/projects" variant="dark">
          Back to Portfolio
        </StudioButton>
      </div>
    );
  }

  // Next project mapping
  const nextIdx = (currentIdx + 1) % projects.length;
  const nextProject = projects[nextIdx];

  return (
    <div className="project-detail-root">
      
      {/* =========================================
         PROJECT HERO COVER
      ========================================= */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay" />
        <img
          src={project.heroImage}
          alt={project.title}
          className="object-cover w-full h-full"
        />
        <div className="project-detail-hero-content">
          <div className="container-studio">
            <span 
              className="eyebrow mb-3 d-block" 
              style={{ color: "var(--color-secondary-soft)", borderLeft: 0, paddingLeft: 0 }}
              data-aos="fade-up"
            >
              {project.category} · {project.year}
            </span>
            <h1 className="project-detail-hero-title display-title" data-aos="fade-up" data-aos-delay="100">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* =========================================
         CASE STUDY DESCRIPTION & METADATA
      ========================================= */}
      <section className="section">
        <div className="container-studio">
          <div className="grid grid-3 gap-16">
            
            {/* Left Column: Descriptions */}
            <div className="grid-col-span-2" style={{ gridColumn: "span 2" }} data-aos="fade-right">
              <span className="section-number">01 / CONCEPTUAL IDEA</span>
              <h2 className="display-title mt-4 mb-8" style={{ fontSize: "clamp(1.75rem, 4vw, var(--fs-3xl))" }}>
                The design statement.
              </h2>
              <p className="mb-6" style={{ fontSize: "var(--fs-lg)", color: "var(--color-text)", fontWeight: 500 }}>
                {project.description}
              </p>
              <p className="mb-0">
                {project.concept}
              </p>
            </div>

            {/* Right Column: Quick Facts Sidebar */}
            <div data-aos="fade-left">
              <div className="project-meta-sidebar">
                <span className="label" style={{ color: "var(--color-accent)", letterSpacing: "0.15em" }}>Quick Facts</span>
                
                {project.details.map((detail, idx) => (
                  <div key={idx} className="project-meta-item">
                    <span className="project-meta-label">{detail.label}</span>
                    <span className="project-meta-val">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
         PROJECT IMAGES MASONRY/GALLERY
      ========================================= */}
      <section className="section" style={{ background: "var(--color-background-alt)" }}>
        <div className="container-studio">
          <div className="mb-16">
            <span className="section-number">02 / ARCHIVE DETAILS</span>
            <h2 className="display-title mt-4">Visual Documentation</h2>
          </div>

          <div className="project-gallery-wrapper">
            <div className="project-gallery-masonry">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="project-gallery-item">
                  <ImageReveal
                    src={imgUrl}
                    alt={`${project.title} detail ${idx + 1}`}
                    aspectRatio="portrait"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
         PROJECT METRIC STATISTICS
      ========================================= */}
      <section className="section">
        <div className="container-studio">
          <div className="mb-16 text-center">
            <span className="eyebrow mb-3">Metrics</span>
            <h2>Project Performance Indicators</h2>
          </div>

          <div className="grid grid-3 gap-12">
            {project.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="project-stat-box"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <span 
                  className="d-block mb-3" 
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--fs-3xl)",
                    color: "var(--color-accent-dark)",
                    fontWeight: 500
                  }}
                >
                  {stat.value}
                </span>
                <span className="label text-muted" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
         NEXT PROJECT CTA FOOTER
      ========================================= */}
      <section className="section section-dark p-0 overflow-hidden">
        <Link to={`/projects/${nextProject.id}`} className="d-block w-full h-full text-center relative py-32 hover-footer-link">
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-35"
            style={{ zIndex: 1 }}
          >
            <img
              src={nextProject.heroImage}
              alt={nextProject.title}
              className="object-cover w-full h-full next-proj-bg-img"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: "rgba(23, 22, 20, 0.75)", zIndex: 2 }} />
          
          <div className="relative container-studio" style={{ zIndex: 3 }}>
            <span className="eyebrow mb-4" style={{ color: "var(--color-secondary-soft)" }}>Next Project</span>
            <h2 className="display-title text-white text-serif italic mb-6">
              {nextProject.title}
            </h2>
            <span 
              className="label text-white" 
              style={{ borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: "var(--space-1)", transition: "all var(--transition-base)" }}
            >
              Explore Case Study ↗
            </span>
          </div>
        </Link>
      </section>
      
      <style>{`
        .hover-footer-link:hover .next-proj-bg-img {
          transform: scale(1.04);
        }
        .hover-footer-link .next-proj-bg-img {
          transition: transform var(--transition-slow);
        }
        .hover-footer-link:hover .label {
          color: var(--color-accent) !important;
          border-bottom-color: var(--color-accent) !important;
        }
      `}</style>

    </div>
  );
}

export default ProjectDetail;
