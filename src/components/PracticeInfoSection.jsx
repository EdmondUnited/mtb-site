import SectionShell from "./SectionShell";
import "./PracticeInfoSection.css";

function PracticeInfoSection({ practice }) {
  return (
    <SectionShell id={practice.id} title={practice.title} subtitle={practice.intro}>
      <ul className="practice-info__list">
        {practice.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

export default PracticeInfoSection;
