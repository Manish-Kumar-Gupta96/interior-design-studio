import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";
import ServicesList from "../components/services/ServicesList";
import ProcessSection from "../components/services/ProcessSection";
import ServicesStatement from "../components/services/ServicesStatement";
import ServicesCTA from "../components/services/ServicesCTA";

function ServicesPage() {
  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesIntro />
      <ServicesList />
      <ProcessSection />
      <ServicesStatement />
      <ServicesCTA />
    </main>
  );
}

export default ServicesPage;
