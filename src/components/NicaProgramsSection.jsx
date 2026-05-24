import SectionShell from "./SectionShell";
import styles from "./NicaProgramsSection.module.css";
import { Link } from "react-router-dom";

function NicaProgramsSection({ programs }) {
  return (
    <SectionShell
      id={programs.id}
      title={programs.title}
      subtitle={programs.intro}
      className={styles.programs}
    >
      <div className={styles.grid}>
        {programs.items.map((program) => (
          <Link
            key={program.slug}
            to={`/programs/${program.slug}`}
            className={styles.card}
          >
            <div className={styles.textContent}>
              <h3>{program.name}</h3>
              <p>{program.shortMessage}</p>
            </div>
            <img
              src={program.src}
              alt={`${program.name} logo`}
              className={styles.iconImage}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}

export default NicaProgramsSection;
