import styles from "./SectionShell.module.css";

function SectionShell({
  id,
  title,
  subtitle,
  children,
  className = "",
  noAlternateBackground = false
}) {
  const sectionClassName = [styles.section, className].filter(Boolean).join(" ");

  return (
    <section
      id={id}
      className={sectionClassName}
      data-no-alternate-background={noAlternateBackground || undefined}
    >
      <div>
        <header>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export default SectionShell;
