import SectionShell from "./SectionShell";
import styles from "./AboutSection.module.css";

function AboutSection({ about }) {
  return (
    <SectionShell id={about.id} title={about.title} className={styles.about}>
      <div>
        {about.text.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </SectionShell>
  );
}

export default AboutSection;
