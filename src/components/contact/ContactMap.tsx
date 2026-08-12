import Reveal from "../common/Reveal";

function ContactMap() {
  return (
    <section className="contact-map-section">

      <div className="container-studio">

        <Reveal className="contact-map">

          <div className="contact-map-placeholder">

            <div className="map-grid" />

            <div className="map-location">

              <span>
                ATELIER
              </span>

              <strong>
                Mumbai
              </strong>

            </div>

          </div>

          <div className="map-caption">

            <span>
              Find the studio
            </span>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps ↗
            </a>

          </div>

        </Reveal>

      </div>

    </section>
  );
}

export default ContactMap;
