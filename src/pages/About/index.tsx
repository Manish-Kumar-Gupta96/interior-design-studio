import { team } from "../../data/team";
import PageHeader from "../../components/common/PageHeader";
import SectionHeading from "../../components/common/SectionHeading";
import ImageReveal from "../../components/common/ImageReveal";

function About() {
  const breadcrumbs = [{ label: "Studio", href: "/about" }];

  const achievements = [
    { year: "2026", title: "Luxury Residential Architecture Award", detail: "awarded for the Mira Residence, Mumbai." },
    { year: "2025", title: "AD100 — Architectural Digest", detail: "Named among the top 100 design firms in South Asia." },
    { year: "2024", title: "Sustainable Workplace Design Gold Medal", detail: "Awarded for Verve Head Office, Bangalore." },
    { year: "2023", title: "Boutique Hospitality Excellence Award", detail: "Recognized for hospitality spatial strategy." }
  ];

  return (
    <div className="about-page-root">
      
      {/* Page Header Banner */}
      <PageHeader
        title="Studio Story"
        eyebrow="Who we are"
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600"
        breadcrumbs={breadcrumbs}
      />

      {/* =========================================
         STUDIO STORY SECTION
      ========================================= */}
      <section className="section">
        <div className="container-studio">
          <div className="grid grid-2 gap-16 items-center">
            
            <div data-aos="fade-right">
              <span className="section-number">01 / CONCEPT</span>
              <h2 className="display-title mt-4 mb-8">
                Bespoke spaces,<br />
                curated lives.
              </h2>
              <p className="mb-4">
                Atelier was founded in 2012 by Kabir Sen and Meera Sen, with the vision of crafting architectural interiors that prioritize spatial harmony, natural illumination, and raw textures. 
              </p>
              <p className="mb-4">
                We believe that a space is successful when it feels effortless. We reject unnecessary ornamentation in favor of structural clarity and material honesty. By working closely with local stone masons, woodworkers, and artisans, we ensure that every custom detail is built with meticulous precision.
              </p>
              <p className="mb-0">
                Over the last decade, our team has grown to encompass architects, interior designers, and project managers, allowing us to execute complex turnkey projects from blueprint drafting to styling.
              </p>
            </div>

            <div>
              <ImageReveal
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200"
                alt="Architect drawing layout blueprint"
                aspectRatio="portrait"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
         VISION & PHILOSOPHY SECTION
      ========================================= */}
      <section className="section section-dark" style={{ background: "var(--color-primary-soft)" }}>
        <div className="container-studio">
          <div className="mb-16">
            <SectionHeading
              eyebrow="Vision"
              title="Our Core Philosophies"
              description="Three foundational concepts that dictate every spatial layout and material selection we make."
              dark={true}
            />
          </div>

          <div className="grid grid-3 gap-12">
            
            <div 
              style={{ borderLeft: "1px solid var(--color-border-light)", paddingLeft: "var(--space-6)" }}
              data-aos="fade-up"
            >
              <span className="eyebrow" style={{ color: "var(--color-accent)" }}>01 / INTEGRITY</span>
              <h3 className="text-white mt-4 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                Spatial Alignment
              </h3>
              <p style={{ fontSize: "var(--fs-sm)" }}>
                We design layouts that optimize physical flow and visual balance. By aligning corridors with natural daylight paths, we create intuitive spatial sequences.
              </p>
            </div>

            <div 
              style={{ borderLeft: "1px solid var(--color-border-light)", paddingLeft: "var(--space-6)" }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="eyebrow" style={{ color: "var(--color-accent)" }}>02 / HONESTY</span>
              <h3 className="text-white mt-4 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                Material Patina
              </h3>
              <p style={{ fontSize: "var(--fs-sm)" }}>
                We source authentic, unprocessed materials—lime wash plaster, untreated oak, and split slate. These materials age gracefully, adding character over time.
              </p>
            </div>

            <div 
              style={{ borderLeft: "1px solid var(--color-border-light)", paddingLeft: "var(--space-6)" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="eyebrow" style={{ color: "var(--color-accent)" }}>03 / STEWARDSHIP</span>
              <h3 className="text-white mt-4 mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                Quiet Sustainability
              </h3>
              <p style={{ fontSize: "var(--fs-sm)" }}>
                We integrate cross-ventilation grids, smart sun-shading, and locally fabricated materials to ensure our luxury interiors have minimal environmental impact.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
         TEAM GALLERY SECTION
      ========================================= */}
      <section className="section">
        <div className="container-studio">
          <div className="d-flex justify-between items-center mb-16 flex-wrap gap-4">
            <SectionHeading
              eyebrow="People"
              title="Meet the Atelier Core"
              description="A creative collective of architects, interior specialists, and project planners."
            />
            <span className="section-number align-self-start">02 / TEAM</span>
          </div>

          <div className="grid grid-4 gap-8">
            {team.map((member, idx) => (
              <div 
                key={member.id} 
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
              >
                <div className="image-wrap aspect-portrait mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-lg)", fontWeight: 600, color: "var(--color-primary)" }}>
                  {member.name}
                </h3>
                <span className="label text-muted d-block mt-1" style={{ fontSize: "10px" }}>
                  {member.role}
                </span>
                <p className="mt-3" style={{ fontSize: "var(--fs-xs)" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
         ACHIEVEMENTS / AWARDS SECTION
      ========================================= */}
      <section className="section section-dark">
        <div className="container-studio">
          <div className="grid grid-2 gap-16 items-center">
            
            <div data-aos="fade-right">
              <span className="eyebrow mb-3" style={{ color: "var(--color-secondary-soft)" }}>Accolades</span>
              <h2 className="display-title text-white">Recognized for Excellence</h2>
              <p className="opacity-70 mt-6" style={{ maxWidth: "480px" }}>
                Our commitment to premium detailing and structural clarity has earned us feature spots in major architecture publications and industry design awards.
              </p>
            </div>

            <div data-aos="fade-left">
              <ul className="flex flex-column gap-6">
                {achievements.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="pb-6" 
                    style={{ borderBottom: "1px solid var(--color-border-light)" }}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-white text-serif mb-0" style={{ fontSize: "var(--fs-lg)" }}>
                        {item.title}
                      </h4>
                      <span className="label text-serif italic text-white opacity-50" style={{ fontSize: "var(--fs-sm)" }}>
                        {item.year}
                      </span>
                    </div>
                    <p className="opacity-50 mb-0" style={{ fontSize: "var(--fs-xs)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
