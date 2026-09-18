import { useState } from "react";
import { Link } from "react-router-dom";
import { projects, categories, ProjectCategory } from "../../data/projects";
import PageHeader from "../../components/common/PageHeader";
import SectionHeading from "../../components/common/SectionHeading";

function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const breadcrumbs = [{ label: "Projects", href: "/projects" }];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="projects-page-root">
      
      {/* Page Header Banner */}
      <PageHeader
        title="Our Projects"
        eyebrow="Architectural Case Studies"
        backgroundImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600"
        breadcrumbs={breadcrumbs}
      />

      {/* =========================================
         PROJECTS PORTFOLIO FILTER SECTION
      ========================================= */}
      <section className="section">
        <div className="container-studio">
          
          <div className="d-flex justify-between items-end mb-16 flex-wrap gap-8">
            <SectionHeading
              eyebrow="Portfolio"
              title="Creative Spatial Archive"
              description="Browse our designs by filtering categories. Each project represents an in-depth case study of layout, light, and materiality."
            />
            
            {/* Category Filter buttons */}
            <div 
              className="flex gap-4 flex-wrap" 
              style={{ fontSize: "var(--fs-xs)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}
              data-aos="fade-left"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    border: 0,
                    padding: "var(--space-2) var(--space-4)",
                    background: activeCategory === cat ? "var(--color-primary)" : "transparent",
                    color: activeCategory === cat ? "var(--color-white)" : "var(--color-text-soft)",
                    borderRadius: "var(--radius-none)",
                    transition: "all var(--transition-base)"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Portfolio cards */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-3 gap-12">
              {filteredProjects.map((project, idx) => (
                <div 
                  key={project.id} 
                  data-aos="fade-up" 
                  data-aos-delay={(idx % 3) * 100}
                >
                  <Link to={`/projects/${project.id}`} className="project-card">
                    <div className="project-card-image">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="project-card-overlay">
                        <span className="project-card-btn">View Case Study</span>
                      </div>
                    </div>
                    <div className="project-card-meta">
                      <div>
                        <h3 className="project-card-title">{project.title}</h3>
                        <span className="project-card-category">{project.category}</span>
                      </div>
                      <span className="project-card-location">{project.location}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20" data-aos="fade-up">
              <span className="eyebrow mb-4">No Projects Found</span>
              <h3 className="text-muted">Currently building new spaces.</h3>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default Projects;
