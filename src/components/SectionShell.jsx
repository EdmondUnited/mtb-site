import "./SectionShell.css";

function SectionShell({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`section-shell ${className}`.trim()}>
      <div className="section-shell__container">
        <div className="section-shell__header">
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export default SectionShell;
