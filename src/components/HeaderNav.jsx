import styles from "./HeaderNav.module.css";

const teamLogoSrc = `${import.meta.env.BASE_URL}images/edmond_logo.svg`;

function HeaderNav({ teamName, links }) {
  return (
    <header className={styles.header}>
      <div>
        <img src={teamLogoSrc} width="150"></img>
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
