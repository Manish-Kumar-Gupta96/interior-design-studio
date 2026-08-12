import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function ServicesHero() {
  return (
    <section className="services-page-hero">
      <div className="container-studio">
        <Reveal>
          <SectionLabel>
            What We Do
          </SectionLabel>
        </Reveal>

        <div className="services-hero-content">
          <Reveal delay={0.08}>
            <h1>
              We create
              <br />
              <em>considered spaces.</em>
            </h1>
          </Reveal>

          <Reveal
            delay={0.16}
            className="services-hero-copy"
          >
            <p>
              From private residences to
              hospitality environments, our
              studio creates interiors with
              clarity, character and lasting
              relevance.
            </p>

            <span>
              Design · Direction · Detail
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
