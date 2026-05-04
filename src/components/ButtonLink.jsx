import styles from "./ButtonLink.module.css";

function ButtonLink({ href, children }) {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  );
}

export default ButtonLink;
