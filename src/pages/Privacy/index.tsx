import PageHeader from "../../components/common/PageHeader";

function Privacy() {
  const breadcrumbs = [{ label: "Privacy Policy", href: "/privacy" }];

  return (
    <div className="privacy-page-root">
      <PageHeader
        title="Privacy Policy"
        eyebrow="Legal Statement"
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600"
        breadcrumbs={breadcrumbs}
      />

      <section className="section">
        <div className="container-studio max-width-800">
          <div className="prose" data-aos="fade-up" style={{ fontSize: "var(--fs-sm)", lineHeight: "1.8" }}>
            <span className="label text-muted d-block mb-4">Effective Date: August 09, 2026</span>
            
            <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}>1. Collection of Information</h3>
            <p className="mb-6">
              We collect information that you submit directly to our studio through our contact inquiry form, including your name, email address, selected project type, and physical description details of your project. This is used solely to evaluate design feasibility.
            </p>

            <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}>2. Use of Information</h3>
            <p className="mb-6">
              Any personal data collected on this website will be used to respond to your specific inquiries, schedule initial consultations, provide site blueprint estimates, and coordinate layout audits. We do not sell or lease your email details to third-party marketing services.
            </p>

            <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}>3. Security Standards</h3>
            <p className="mb-6">
              We implement industry-grade security parameters to safeguard your data. Although no digital connection is completely foolproof, we make every effort to defend your personal coordinates against leaks, modifications, or deletion.
            </p>

            <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}>4. Cookies Policy</h3>
            <p className="mb-6">
              Our website uses basic analytics cookies to monitor traffic flows and understand which case studies are viewed most frequently. You can choose to block cookies through your individual browser controls without affecting your access to our portfolio.
            </p>

            <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}>5. Legal Contact</h3>
            <p className="mb-0">
              For any questions regarding this Privacy Statement, please email us directly at <a href="mailto:hello@atelierstudio.com" style={{ color: "var(--color-accent-dark)", fontWeight: 500 }}>hello@atelierstudio.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
