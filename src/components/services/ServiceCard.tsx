import type { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({
  service,
  index
}: ServiceCardProps) {
  return (
    <article className="service-card">
      <a
        href={`/services/${service.slug}`}
        className="service-card-link"
      >
        <div className="service-card-image">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
          />

          <div className="service-card-overlay">
            <span>
              Explore service
            </span>
            <strong>
              ↗
            </strong>
          </div>
        </div>

        <div className="service-card-content">
          <div className="service-card-heading">
            <span>
              {service.number}
            </span>
            <h2>
              {service.title}
            </h2>
          </div>

          <p>
            {service.description}
          </p>

          <div className="service-card-footer">
            <span>
              {service.shortTitle}
            </span>
            <strong>
              →
            </strong>
          </div>
        </div>
      </a>
    </article>
  );
}

export default ServiceCard;
