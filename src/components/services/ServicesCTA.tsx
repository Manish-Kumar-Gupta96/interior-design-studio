import Reveal from "../common/Reveal";

function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="container-studio">
        <Reveal className="services-cta-inner">
          <span>
            Let's work together
          </span>

          <h2>
            Have a space
            <br />
            <em>in mind?</em>
          </h2>

          <a href="/contact">
            Tell us about it
            <strong>↗</strong>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default ServicesCTA;
