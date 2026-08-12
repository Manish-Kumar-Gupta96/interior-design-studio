import StudioHero from "../components/about/StudioHero";
import StudioIntroduction from "../components/about/StudioIntroduction";
import StudioImage from "../components/about/StudioImage";
import StudioPhilosophy from "../components/about/StudioPhilosophy";
import StudioValues from "../components/about/StudioValues";
import StudioStats from "../components/about/StudioStats";
import StudioJourney from "../components/about/StudioJourney";
import StudioBelief from "../components/about/StudioBelief";
import StudioCTA from "../components/about/StudioCTA";

function AboutPage() {
  return (
    <main className="about-page">

      <StudioHero />

      <StudioIntroduction />

      <StudioImage />

      <StudioPhilosophy />

      <StudioValues />

      <StudioStats />

      <StudioJourney />

      <StudioBelief />

      <StudioCTA />

    </main>
  );
}

export default AboutPage;
