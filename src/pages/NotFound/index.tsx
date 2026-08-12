import StudioButton from "../../components/common/StudioButton";

function NotFound() {
  return (
    <div 
      className="flex flex-column items-center justify-center text-center"
      style={{ minHeight: "100vh", padding: "var(--space-8)" }}
    >
      <div data-aos="fade-up">
        <span className="eyebrow mb-4">Error Code 404</span>
        <h1 
          className="display-title mb-6" 
          style={{ fontSize: "clamp(4rem, 15vw, 10rem)", color: "var(--color-accent-dark)" }}
        >
          404
        </h1>
        <h2 className="mb-6 text-serif italic" style={{ fontSize: "var(--fs-2xl)", fontWeight: 400 }}>
          This space could not be found.
        </h2>
        <p className="max-width-600 mx-auto mb-12 text-muted">
          The page you are looking for does not exist, has been relocated, or is currently undergoing spatial redesign.
        </p>
        <StudioButton href="/" variant="dark">
          Back to Main Studio
        </StudioButton>
      </div>
    </div>
  );
}

export default NotFound;
