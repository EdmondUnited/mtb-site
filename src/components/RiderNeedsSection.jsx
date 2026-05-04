import SectionShell from "./SectionShell";
import styles from "./RiderNeedsSection.module.css";

function RiderNeedsSection({ needs }) {
  return (
    <SectionShell id={needs.id} title={needs.title} className={styles.needs}>
      <ul>
        {needs.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

export default RiderNeedsSection;
