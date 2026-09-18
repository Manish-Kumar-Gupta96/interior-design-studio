import { studioValues } from "../../data/studio";
import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function StudioValues() {
  return (
    <section className="studio-values section">

      <div className="container-studio">

        <div className="studio-values-header">

          <Reveal>
            <SectionLabel>
              What Guides Us
            </SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              Principles that shape every
              decision we make.
            </p>
          </Reveal>

        </div>

        <div className="studio-values-list">

          {studioValues.map(
            (value, index) => (

              <Reveal
                key={value.number}
                delay={index * 0.06}
                className="studio-value"
              >

                <span className="studio-value-number">
                  {value.number}
                </span>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.description}
                </p>

                <span className="studio-value-arrow">
                  ↗
                </span>

              </Reveal>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default StudioValues;
