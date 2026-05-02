import SectionShell from "./SectionShell";
import "./WhoCanJoinSection.css";

function WhoCanJoinSection({ join }) {
  return (
    <SectionShell id={join.id} title={join.title}>
      <ul className="who-can-join__list">
        {join.requirements.map((requirement) => (
          <li key={requirement}>{requirement}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

export default WhoCanJoinSection;
