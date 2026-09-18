import PageHeader from "../../components/common/PageHeader";

function Terms() {
  const breadcrumbs = [{ label: "Terms & Conditions", href: "/terms" }];

  return (
    <div className="terms-page-root">
      <PageHeader
        title="Terms & Conditions"
        eyebrow="Legal Rules"
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600"
        breadcrumbs={breadcrumbs}
      />

      <section className="section">
        <div className="container-studio max-width-800">
          <div className="prose" data-aos="fade-up" style={{ fontSize: "var(--fs-sm)", lineHeight: "1.8" }}>
            <span className="label text-muted d-block mb-4">Last Updated: August 09, 2026</span>
            
            <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}>1. Terms Agreement</h3>
            <p className="mb-6">
              By entering and browsing this website, you agree to comply with and be bound by the following terms of use. The contents of this website—including interior photography, architectural sketches, textual case studies, and coding structures—are the intellectual property of Atelier Interior Design Studio.
            </p>

            <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}>2. Copyright & Intellectual Property</h3>
            <p className="mb-6">
              You may not download, replicate, scrape, or distribute any portfolio imagery or case study text from this website for commercial projects or competing design portfolios without obtaining direct, written consent from Kabir Sen or Meera Sen.
            </p>

            <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}>3. Showcase Representation</h3>
            <p className="mb-6">
              This website serves as a digital representation of Atelier's interior design services and completed works. While we make every effort to display accurate details, year markers, and material statistics, actual physical build variables may differ based on specific project locations.
            </p>

            <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}>4. Disclaimer of Liability</h3>
            <p className="mb-6">
              Atelier Interior Design Studio is not liable for any structural, constructional, or financial losses incurred if you choose to replicate any material configurations or lighting layouts depicted in our case studies without direct supervision from our professional structural engineers.
            </p>

            <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}>5. Modifications</h3>
            <p className="mb-0">
              We reserve the right to modify these terms and conditions at any time. Your continued use of the website following any changes signifies your agreement to comply with the revised rules.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
