import SectionShell from "./SectionShell";
import styles from "./WhoCanJoinSection.module.css";

function WhoCanJoinSection({ join }) {
  return (
    <SectionShell id={join.id} title={join.title} className={styles.join}>
      <ul>
        {join.requirements.map((requirement) => (
          <li key={requirement}>{requirement}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

export default WhoCanJoinSection;
