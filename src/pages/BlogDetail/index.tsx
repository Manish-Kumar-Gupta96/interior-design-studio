import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { journalArticles } from "../../data/journal";
import StudioButton from "../../components/common/StudioButton";

function BlogDetail() {
  const { id } = useParams<{ id: string }>();

  const currentIdx = journalArticles.findIndex((art) => art.id === id);
  const article = journalArticles[currentIdx];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="container-studio py-32 text-center">
        <span className="eyebrow mb-4">Error 404</span>
        <h2 className="display-title mb-8">Article Not Found</h2>
        <StudioButton href="/journal" variant="dark">
          Back to Journal
        </StudioButton>
      </div>
    );
  }

  // Sibling articles for suggestions
  const nextIdx = (currentIdx + 1) % journalArticles.length;
  const nextArticle = journalArticles[nextIdx];

  return (
    <div className="blog-detail-root">
      
      {/* =========================================
         ARTICLE HERO BANNER
      ========================================= */}
      <section 
        className="page-header-banner" 
        style={{ height: "50vh", minHeight: "380px" }}
      >
        <div className="page-header-overlay" />
        <div className="page-header-image">
          <img
            src={article.image}
            alt={article.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container-studio page-header-content">
          <div className="max-width-800">
            <span 
              className="eyebrow mb-3 d-block" 
              style={{ color: "var(--color-secondary-soft)", borderLeft: 0, paddingLeft: 0 }}
              data-aos="fade-up"
            >
              {article.category} · {article.readTime}
            </span>
            <h1 
              className="page-header-title display-title text-white" 
              style={{ fontSize: "clamp(2rem, 5vw, var(--fs-4xl))" }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* =========================================
         ARTICLE CONTENT BODY
      ========================================= */}
      <section className="section">
        <div className="container-studio">
          <div className="grid grid-3 gap-16">
            
            {/* Left Sidebar: Author Info */}
            <div data-aos="fade-right">
              <div 
                className="pb-6 mb-6" 
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <span className="label text-muted d-block mb-4">Written By</span>
                <div className="flex items-center gap-4">
                  <div 
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-full)",
                      overflow: "hidden",
                      border: "1px solid var(--color-border)"
                    }}
                  >
                    <img
                      src={article.author.image}
                      alt={article.author.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "var(--fs-md)", fontWeight: 600, margin: 0 }}>
                      {article.author.name}
                    </h4>
                    <span className="text-muted" style={{ fontSize: "var(--fs-xs)", textTransform: "uppercase" }}>
                      {article.author.role}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span className="label text-muted d-block mb-2">Published</span>
                <span style={{ fontSize: "var(--fs-sm)", fontWeight: 500 }}>{article.date}</span>
              </div>
            </div>

            {/* Right Main Body: Paragraphs */}
            <div className="grid-col-span-2" style={{ gridColumn: "span 2" }} data-aos="fade-left">
              <div className="blog-article-content">
                
                {/* Highlight summary */}
                <p 
                  className="mb-8" 
                  style={{
                    fontSize: "var(--fs-lg)",
                    color: "var(--color-primary)",
                    lineHeight: "1.7",
                    fontWeight: 500,
                    borderLeft: "2px solid var(--color-accent)",
                    paddingLeft: "var(--space-6)"
                  }}
                >
                  {article.summary}
                </p>

                {/* Content paragraphs */}
                {article.content.map((p, idx) => (
                  <p key={idx} className="mb-6" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    {p}
                  </p>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
         NEXT ARTICLE FOOTER SUGGESTION
      ========================================= */}
      <section 
        className="section-sm" 
        style={{ background: "var(--color-background-alt)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="container-studio" data-aos="fade-up">
          <div className="grid grid-2 gap-8 items-center">
            <div>
              <span className="eyebrow mb-3">Read Next</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-2xl)", fontWeight: 500 }}>
                {nextArticle.title}
              </h3>
              <p className="mt-4 mb-0" style={{ fontSize: "var(--fs-sm)", maxWidth: "480px" }}>
                {nextArticle.summary}
              </p>
            </div>
            <div className="text-start text-md-center">
              <StudioButton href={`/journal/${nextArticle.id}`} variant="dark">
                Read Article
              </StudioButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default BlogDetail;
