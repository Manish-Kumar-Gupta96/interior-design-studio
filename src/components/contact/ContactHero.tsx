import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function ContactHero() {
  return (
    <section className="contact-page-hero">

      <div className="container-studio">

        <Reveal>
          <SectionLabel>
            Start A Project
          </SectionLabel>
        </Reveal>

        <div className="contact-hero-content">

          <Reveal delay={0.08}>
            <h1>
              Tell us about
              <br />
              <em>your space.</em>
            </h1>
          </Reveal>

          <Reveal
            delay={0.16}
            className="contact-hero-copy"
          >
            <p>
              Whether you are beginning with
              an idea or already have plans in
              place, we'd love to hear what
              you're creating.
            </p>

            <span>
              New project enquiries
            </span>
          </Reveal>

        </div>

      </div>

    </section>
  );
}

export default ContactHero;
