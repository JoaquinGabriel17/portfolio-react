import TerminalHero from "@/components/TerminalHero/TerminalHero";

export default function Presentation({ data, lang }) {
  const { role, roleDescription, buttonText } = data;

  const handleCtaClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="presentation" className="hero-section" aria-labelledby="hero-title">
      <TerminalHero
        lang={lang}
        onCtaClick={handleCtaClick}
      />
    </section>
  );
}