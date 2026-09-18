import { studioMilestones } from "../../data/studio";
import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function StudioJourney() {
  return (
    <section className="studio-journey section">

      <div className="container-studio">

        <div className="studio-journey-header">

          <Reveal>
            <SectionLabel>
              Our Journey
            </SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <h2>
              A practice
              <br />
              <em>in progress.</em>
            </h2>
          </Reveal>

        </div>

        <div className="studio-timeline">

          {studioMilestones.map(
            (milestone, index) => (

              <Reveal
                key={milestone.year}
                delay={index * 0.05}
                className="studio-timeline-item"
              >

                <span className="timeline-year">
                  {milestone.year}
                </span>

                <div className="timeline-content">

                  <h3>
                    {milestone.title}
                  </h3>

                  <p>
                    {milestone.description}
                  </p>

                </div>

                <span className="timeline-dot" />

              </Reveal>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default StudioJourney;
