import SectionShell from "./SectionShell";
import styles from "./CoachesSection.module.css";

function CoachesSection({ coaches }) {
  return (
    <SectionShell
      id={coaches.id}
      title={coaches.title}
      subtitle={coaches.intro}
      className={styles.coaches}
    >
      <div>
        {coaches.members.map((coach) => (
          <article key={coach.name}>
            <img src={coach.image} alt={coach.imageAlt} />
            <h3>{coach.name}</h3>
            <p>{coach.role}</p>
            <p>{coach.type}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default CoachesSection;
