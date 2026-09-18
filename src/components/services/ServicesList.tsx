import { services } from "../../data/services";
import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";
import ServiceCard from "./ServiceCard";

function ServicesList() {
  return (
    <section className="services-list section">
      <div className="container-studio">
        <div className="services-list-header">
          <Reveal>
            <SectionLabel>
              Studio Capabilities
            </SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              A complete design service,
              from first conversation to
              final detail.
            </p>
          </Reveal>
        </div>

        <div className="services-cards">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.06}
            >
              <ServiceCard
                service={service}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
