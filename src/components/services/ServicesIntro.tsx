import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function ServicesIntro() {
  return (
    <section className="services-intro section">
      <div className="container-studio">
        <div className="services-intro-grid">
          <Reveal>
            <SectionLabel>
              Our Approach
            </SectionLabel>
          </Reveal>

          <Reveal
            delay={0.08}
            className="services-intro-content"
          >
            <p className="services-intro-lead">
              We believe the best interiors
              feel inevitable — as though
              every material, object and
              proportion belongs exactly where
              it is.
            </p>

            <p>
              Our studio works across architecture,
              interiors and styling to create
              complete environments. We look at
              the larger picture while remaining
              deeply attentive to the smallest
              details.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ServicesIntro;
