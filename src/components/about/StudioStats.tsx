import { studioStats } from "../../data/studio";
import Reveal from "../common/Reveal";

function StudioStats() {
  return (
    <section className="studio-stats section">

      <div className="container-studio">

        <div className="studio-stats-grid">

          {studioStats.map(
            (stat, index) => (

              <Reveal
                key={stat.label}
                delay={index * 0.06}
                className="studio-stat"
              >

                <strong>
                  {stat.value}
                </strong>

                <span>
                  {stat.label}
                </span>

              </Reveal>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default StudioStats;
