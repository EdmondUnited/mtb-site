import SectionShell from "./SectionShell";
import "./FAQSection.css";

function FAQSection({ faq }) {
  return (
    <SectionShell id={faq.id} title={faq.title}>
      <div className="faq-section__list">
        {faq.items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

export default FAQSection;
