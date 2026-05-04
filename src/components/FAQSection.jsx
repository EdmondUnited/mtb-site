import SectionShell from "./SectionShell";
import styles from "./FAQSection.module.css";

function FAQSection({ faq }) {
  return (
    <SectionShell id={faq.id} title={faq.title} className={styles.faq}>
      <div>
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
