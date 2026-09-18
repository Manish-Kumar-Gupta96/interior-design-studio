import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function StudioPhilosophy() {
  return (
    <section className="studio-philosophy section">

      <div className="container-studio">

        <div className="studio-philosophy-grid">

          <Reveal>
            <SectionLabel>
              Our Philosophy
            </SectionLabel>
          </Reveal>

          <div className="studio-philosophy-content">

            <Reveal delay={0.08}>
              <h2>
                Quiet spaces.
                <br />
                <em>Strong ideas.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p>
                We are interested in interiors
                that don't need to shout. Spaces
                where natural materials, considered
                proportions and thoughtful objects
                create an atmosphere that feels
                effortless.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                Our work is rooted in restraint,
                but never minimal for the sake
                of minimalism. We believe warmth,
                personality and imperfection are
                essential parts of a space.
              </p>
            </Reveal>

          </div>

        </div>

      </div>

    </section>
  );
}

export default StudioPhilosophy;
