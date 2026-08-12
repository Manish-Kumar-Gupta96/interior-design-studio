import { useState } from "react";
import { Link } from "react-router-dom";
import { journalArticles } from "../../data/journal";
import PageHeader from "../../components/common/PageHeader";
import SectionHeading from "../../components/common/SectionHeading";

type ArticleCategory = "all" | "trends" | "inspiration" | "articles";

function Journal() {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory>("all");
  const breadcrumbs = [{ label: "Journal", href: "/journal" }];

  const filteredArticles = activeCategory === "all"
    ? journalArticles
    : journalArticles.filter((art) => art.category === activeCategory);

  const categoriesList: { value: ArticleCategory; label: string }[] = [
    { value: "all", label: "All Posts" },
    { value: "trends", label: "Design Trends" },
    { value: "inspiration", label: "Inspiration" },
    { value: "articles", label: "Articles" }
  ];

  return (
    <div className="journal-page-root">
      
      {/* Page Header Banner */}
      <PageHeader
        title="Design Journal"
        eyebrow="Editorial & Insights"
        backgroundImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600"
        breadcrumbs={breadcrumbs}
      />

      {/* =========================================
         JOURNAL FILTER & GRID SECTION
      ========================================= */}
      <section className="section">
        <div className="container-studio">
          
          <div className="d-flex justify-between items-end mb-16 flex-wrap gap-8">
            <SectionHeading
              eyebrow="Journal"
              title="Thoughts on Spatial Curation"
              description="A space of reflection. We document changing design movements, custom cabinetry guides, and collectible lighting histories."
            />

            {/* Category Filter selectors */}
            <div 
              className="flex gap-4 flex-wrap"
              style={{ fontSize: "var(--fs-xs)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}
              data-aos="fade-left"
            >
              {categoriesList.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCategory(cat.value)}
                  style={{
                    border: 0,
                    padding: "var(--space-2) var(--space-4)",
                    background: activeCategory === cat.value ? "var(--color-primary)" : "transparent",
                    color: activeCategory === cat.value ? "var(--color-white)" : "var(--color-text-soft)",
                    transition: "all var(--transition-base)"
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid list of articles */}
          <div className="grid grid-2 gap-16">
            {filteredArticles.map((article, idx) => (
              <div 
                key={article.id} 
                data-aos="fade-up" 
                data-aos-delay={(idx % 2) * 150}
              >
                <Link to={`/journal/${article.id}`} className="journal-card">
                  <div className="image-wrap aspect-landscape mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="journal-card-meta">
                    <span className="journal-card-category">{article.category}</span>
                    <span>/</span>
                    <span>{article.date}</span>
                    <span>/</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="journal-card-title mt-2">
                    {article.title}
                  </h3>
                  <p className="mb-4" style={{ fontSize: "var(--fs-sm)" }}>
                    {article.summary}
                  </p>
                  <span className="studio-link">Read Article</span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default Journal;
