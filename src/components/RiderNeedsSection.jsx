import SectionShell from "./SectionShell";
import "./RiderNeedsSection.css";

function RiderNeedsSection({ needs }) {
  return (
    <SectionShell id={needs.id} title={needs.title}>
      <ul className="rider-needs__list">
        {needs.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

export default RiderNeedsSection;
