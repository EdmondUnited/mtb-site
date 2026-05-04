import ButtonLink from "./ButtonLink";
import SectionShell from "./SectionShell";
import styles from "./ContactCTASection.module.css";

function ContactCTASection({ contact }) {
  return (
    <SectionShell
      id={contact.id}
      title={contact.title}
      subtitle={contact.text}
      className={styles.section}
      noAlternateBackground
    >
      <div>
        <ButtonLink href={contact.ctaHref}>{contact.ctaLabel}</ButtonLink>
        <p>{contact.supportText}</p>
      </div>
    </SectionShell>
  );
}

export default ContactCTASection;
