import { processSteps } from "../../data/services";
import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function ProcessSection() {
  return (
    <section className="process-section section">
      <div className="container-studio">
        <div className="process-header">
          <Reveal>
            <SectionLabel>
              Our Process
            </SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <h2>
              From first idea
              <br />
              <em>to final detail.</em>
            </h2>
          </Reveal>
        </div>

        <div className="process-list">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.07}
              className="process-item"
            >
              <span className="process-number">
                {step.number}
              </span>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

              <span className="process-arrow">
                ↗
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
