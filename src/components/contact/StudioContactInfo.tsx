import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function StudioContactInfo() {
  return (
    <section className="studio-contact-info section">

      <div className="container-studio">

        <div className="studio-contact-grid">

          <Reveal>
            <SectionLabel>
              The Studio
            </SectionLabel>
          </Reveal>

          <div className="studio-contact-details">

            <Reveal delay={0.08}>
              <div className="contact-detail">

                <span>
                  Visit
                </span>

                <p>
                  24A, Design District
                  <br />
                  Bandra West
                  <br />
                  Mumbai 400050
                  <br />
                  India
                </p>

              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="contact-detail">

                <span>
                  Contact
                </span>

                <a href="mailto:hello@atelierstudio.com">
                  hello@atelierstudio.com
                </a>

                <a href="tel:+912240000000">
                  +91 22 4000 0000
                </a>

              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="contact-detail">

                <span>
                  Studio Hours
                </span>

                <p>
                  Monday — Friday
                  <br />
                  10:00 — 18:00
                </p>

              </div>
            </Reveal>

          </div>

        </div>

      </div>

    </section>
  );
}

export default StudioContactInfo;
