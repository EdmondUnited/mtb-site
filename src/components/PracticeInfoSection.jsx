import SectionShell from "./SectionShell";
import styles from "./PracticeInfoSection.module.css";

function PracticeInfoSection({ practice }) {
  return (
    <SectionShell
      id={practice.id}
      title={practice.title}
      subtitle={practice.intro}
      className={styles.practice}
    >
      <ul>
        {practice.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

export default PracticeInfoSection;
