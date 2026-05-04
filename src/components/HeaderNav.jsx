import styles from "./HeaderNav.module.css";

function HeaderNav({ teamName, links }) {
  return (
    <header className={styles.header}>
      <div>
        <img src="./images/edmond_logo.png" width="100"></img>
        <a href="#top">
          {teamName}
        </a>
        <nav aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderNav;
