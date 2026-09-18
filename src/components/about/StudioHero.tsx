import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function StudioHero() {
  return (
    <section className="studio-page-hero">

      <div className="container-studio">

        <Reveal>
          <SectionLabel>
            The Studio
          </SectionLabel>
        </Reveal>

        <div className="studio-hero-content">

          <Reveal delay={0.08}>
            <h1>
              We design
              <br />
              <em>how spaces feel.</em>
            </h1>
          </Reveal>

          <Reveal
            delay={0.16}
            className="studio-hero-copy"
          >
            <p>
              An independent interior design
              studio creating thoughtful spaces
              for living, working and gathering.
            </p>

            <span>
              Mumbai · India
            </span>
          </Reveal>

        </div>

      </div>

    </section>
  );
}

export default StudioHero;
