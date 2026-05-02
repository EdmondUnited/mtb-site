import ButtonLink from "./ButtonLink";
import SectionShell from "./SectionShell";
import "./ContactCTASection.css";

function ContactCTASection({ contact }) {
  return (
    <SectionShell
      id={contact.id}
      title={contact.title}
      subtitle={contact.text}
      className="contact-cta-section"
    >
      <div className="contact-cta-section__content">
        <ButtonLink href={contact.ctaHref}>{contact.ctaLabel}</ButtonLink>
        <p>{contact.supportText}</p>
      </div>
    </SectionShell>
  );
}

export default ContactCTASection;
