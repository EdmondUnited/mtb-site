import "./ButtonLink.css";

function ButtonLink({ href, children }) {
  return (
    <a className="btn-link" href={href}>
      {children}
    </a>
  );
}

export default ButtonLink;
