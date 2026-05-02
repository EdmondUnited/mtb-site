import SectionShell from "./SectionShell";
import "./CoachesSection.css";

function CoachesSection({ coaches }) {
  return (
    <SectionShell id={coaches.id} title={coaches.title} subtitle={coaches.intro}>
      <div className="coaches-section__grid">
        {coaches.members.map((coach) => (
          <article className="coaches-section__card" key={coach.name}>
            <img src={coach.image} alt={coach.imageAlt} />
            <h3>{coach.name}</h3>
            <p className="coaches-section__role">{coach.role}</p>
            <p className="coaches-section__type">{coach.type}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default CoachesSection;
