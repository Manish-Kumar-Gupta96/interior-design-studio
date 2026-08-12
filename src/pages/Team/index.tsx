import { team } from "../../data/team";
import PageHeader from "../../components/common/PageHeader";
import SectionHeading from "../../components/common/SectionHeading";

function Team() {
  const breadcrumbs = [{ label: "Team", href: "/team" }];

  // Categorize members
  const founders = team.filter((m) => m.category === "founders");
  const architects = team.filter((m) => m.category === "architects");
  const designers = team.filter((m) => m.category === "designers");
  const teamMembers = team.filter((m) => m.category === "team");

  const renderTeamCategory = (title: string, list: typeof team, sectionNum: string) => {
    if (list.length === 0) return null;
    return (
      <div className="mb-20">
        <div className="d-flex justify-between items-center mb-12 flex-wrap gap-4">
          <h3 
            style={{ 
              fontFamily: "var(--font-display)", 
              fontSize: "var(--fs-2xl)", 
              fontWeight: 500, 
              color: "var(--color-primary)",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "var(--space-2)",
              width: "100%",
              maxWidth: "400px"
            }}
          >
            {title}
          </h3>
          <span className="section-number align-self-start">{sectionNum}</span>
        </div>

        <div className="grid grid-3 gap-12">
          {list.map((member, idx) => (
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
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-xl)", fontWeight: 500 }}>
                {member.name}
              </h4>
              <span 
                className="label text-muted d-block mt-1" 
                style={{ fontSize: "10px", color: "var(--color-accent-dark) !important" }}
              >
                {member.role}
              </span>
              <p className="mt-4 mb-4" style={{ fontSize: "var(--fs-sm)" }}>
                {member.bio}
              </p>
              
              {/* Member Socials */}
              <div className="flex gap-4">
                {member.socials.map((social, sIdx) => (
                  <a
                    key={sIdx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover-icon-link"
                    style={{ fontSize: "var(--fs-md)", transition: "color var(--transition-base)" }}
                    aria-label={`${member.name}'s ${social.platform}`}
                  >
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="team-page-root">
      
      {/* Page Header Banner */}
      <PageHeader
        title="Our Team"
        eyebrow="The Creators"
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600"
        breadcrumbs={breadcrumbs}
      />

      {/* =========================================
         TEAM SECTIONS
      ========================================= */}
      <section className="section">
        <div className="container-studio">
          
          <div className="mb-16">
            <SectionHeading
              eyebrow="Personnel"
              title="Creative Collective"
              description="Our diverse team brings together global architectural design qualifications and extensive build execution experience."
            />
          </div>

          {/* Render Founders */}
          {renderTeamCategory("Founders", founders, "01 / FOUNDERS")}

          {/* Render Architects */}
          {renderTeamCategory("Architects", architects, "02 / ARCHITECTS")}

          {/* Render Designers */}
          {renderTeamCategory("Designers", designers, "03 / DESIGNERS")}

          {/* Render Other Members */}
          {renderTeamCategory("Execution & Management", teamMembers, "04 / EXECUTION")}

        </div>
      </section>

      <style>{`
        .hover-icon-link:hover {
          color: var(--color-primary) !important;
        }
      `}</style>

    </div>
  );
}

export default Team;
