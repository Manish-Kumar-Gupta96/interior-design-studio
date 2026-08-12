import Reveal from "../common/Reveal";

function StudioImage() {
  return (
    <section className="studio-image-section">

      <div className="container-studio">

        <Reveal className="studio-large-image">

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
            alt="Interior design studio"
            loading="lazy"
          />

        </Reveal>

        <div className="studio-image-caption">

          <span>
            The studio
          </span>

          <span>
            Ideas, materials &amp; objects
          </span>

        </div>

      </div>

    </section>
  );
}

export default StudioImage;
