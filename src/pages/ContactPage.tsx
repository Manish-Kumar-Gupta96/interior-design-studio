import ContactHero from "../components/contact/ContactHero";
import StudioContactInfo from "../components/contact/StudioContactInfo";
import ProjectInquiryForm from "../components/contact/ProjectInquiryForm";
import ContactMap from "../components/contact/ContactMap";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactFinalCTA from "../components/contact/ContactFinalCTA";

function ContactPage() {
  return (
    <main className="contact-page">
      <ContactHero />
      <StudioContactInfo />
      <ProjectInquiryForm />
      <ContactMap />
      <ContactFAQ />
      <ContactFinalCTA />
    </main>
  );
}

export default ContactPage;
