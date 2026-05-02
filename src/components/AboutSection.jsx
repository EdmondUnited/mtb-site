import SectionShell from "./SectionShell";
import "./AboutSection.css";

function AboutSection({ about }) {
  return (
    <SectionShell id={about.id} title={about.title}>
      <div className="about-section__text">
        {about.text.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </SectionShell>
  );
}

export default AboutSection;
