import Reveal from "../common/Reveal";

function StudioCTA() {
  return (
    <section className="studio-cta">

      <div className="container-studio">

        <Reveal className="studio-cta-inner">

          <span>
            Start a conversation
          </span>

          <h2>
            Let's create
            <br />
            <em>something meaningful.</em>
          </h2>

          <a href="/contact">
            Work with us
            <strong>↗</strong>
          </a>

        </Reveal>

      </div>

    </section>
  );
}

export default StudioCTA;
