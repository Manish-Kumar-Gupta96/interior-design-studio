import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function StudioIntroduction() {
  return (
    <section className="studio-introduction section">

      <div className="container-studio">

        <div className="studio-introduction-grid">

          <Reveal>
            <SectionLabel>
              About The Studio
            </SectionLabel>
          </Reveal>

          <div className="studio-introduction-content">

            <Reveal delay={0.08}>
              <p className="studio-introduction-lead">
                We believe good design is not
                about adding more. It is about
                understanding what matters and
                giving it room to exist.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p>
                Our studio works across interiors,
                architecture, furniture and styling.
                Every project begins with listening —
                understanding the people, the place
                and the possibilities within it.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                From the broadest spatial decisions
                to the smallest material junction,
                we approach every detail with the
                same curiosity and care.
              </p>
            </Reveal>

          </div>

        </div>

      </div>

    </section>
  );
}

export default StudioIntroduction;
