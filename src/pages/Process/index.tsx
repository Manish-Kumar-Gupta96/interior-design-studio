import PageHeader from "../../components/common/PageHeader";
import SectionHeading from "../../components/common/SectionHeading";
import ImageReveal from "../../components/common/ImageReveal";

function Process() {
  const breadcrumbs = [{ label: "Process", href: "/process" }];

  const steps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "Every design journey begins with an in-depth conversation. We visit your site, understand your physical requirements, daily rituals, aesthetic preferences, and budget parameters. This stage establishes the project scope and constraints.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600"
    },
    {
      num: "02",
      title: "Concept Design & Moodboarding",
      desc: "We translate our discussion into visual narratives. We propose 2-3 spatial layout variations and curate physical mood boards of stones, wood grains, linen finishes, and metals. This establishes the structural flow and tactile identity of the space.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600"
    },
    {
      num: "03",
      title: "Design Development & CADs",
      desc: "Once the concept is approved, we map the space to exact millimeters. We produce detailed architectural drawings—floor plans, electrical schemas, fluted stone details, and detailed custom woodwork drawings for our carpentry mills.",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600"
    },
    {
      num: "04",
      title: "Construction & Execution Supervision",
      desc: "We bridge paper concepts and physical structures. Our project execution director audits the site regularly, verifying structural masonry, wiring runs, plaster application, and custom wardrobe frames to ensure Atelier quality guidelines are met.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=600"
    },
    {
      num: "05",
      title: "Handover, Styling & Curation",
      desc: "The final, emotional step. We clean the space, move in bespoke and vintage furniture pieces, install organic ceramic accents, hang curated framed artworks, and adjust indirect spotlights. We hand you a complete, ready-to-live home.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600"
    }
  ];

  return (
    <div className="process-page-root">
      
      {/* Page Header Banner */}
      <PageHeader
        title="Our Process"
        eyebrow="How we design"
        backgroundImage="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600"
        breadcrumbs={breadcrumbs}
      />

      {/* =========================================
         PROCESS INTRODUCTION
      ========================================= */}
      <section className="section">
        <div className="container-studio">
          <div className="grid grid-2 gap-16 items-center">
            
            <div data-aos="fade-right">
              <span className="section-number">METHODOLOGY</span>
              <h2 className="display-title mt-4 mb-8">
                Systematic execution,<br />
                uncompromising quality.
              </h2>
              <p className="mb-0">
                A premium space cannot be rushed. It requires a disciplined, phase-by-phase approach that checks structural viability, detailed drawing approvals, and woodwork fit-outs before moving forward. By dividing our process into five distinct milestones, we ensure total transparency and quality control.
              </p>
            </div>

            <div data-aos="fade-left">
              <p className="mb-4">
                We manage everything under one roof. Our project planners synchronize dates with general contractors, electricians, and millwork assemblers so that build delays are minimized.
              </p>
              <p className="mb-0 text-muted" style={{ fontSize: "var(--fs-sm)" }}>
                Whether designing a luxury sea-facing villa in Mumbai or a collaborative creative office in Bangalore, this structured process guarantees that what we render is exactly what gets delivered.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
         PROCESS TIMELINE DETAIL
      ========================================= */}
      <section className="section" style={{ background: "var(--color-background-alt)" }}>
        <div className="container-studio">
          <div className="mb-16">
            <span className="section-number">01 / STAGES</span>
            <h2 className="display-title mt-4">The Development Timeline</h2>
          </div>

          <div className="process-timeline mx-auto" style={{ maxWidth: "1000px" }}>
            {steps.map((step, idx) => (
              <div 
                key={step.num} 
                className="process-timeline-item"
                data-aos="fade-up"
              >
                <div className="process-timeline-number">{step.num}</div>
                <div className="process-timeline-content pb-12">
                  <div className="grid grid-2 gap-12 items-center mt-2">
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-2xl)", fontWeight: 500, color: "var(--color-primary)" }}>
                        {step.title}
                      </h3>
                      <p className="mt-4 mb-0">
                        {step.desc}
                      </p>
                    </div>
                    <div>
                      <div className="image-wrap aspect-landscape" style={{ maxWidth: "420px", marginLeft: "auto" }}>
                        <img
                          src={step.image}
                          alt={step.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default Process;
