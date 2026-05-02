import "./HeaderNav.css";

function HeaderNav({ teamName, links }) {
  return (
    <header className="header-nav">
      <div className="header-nav__inner">
        <a className="header-nav__brand" href="#top">
          {teamName}
        </a>
        <nav aria-label="Primary">
          <ul className="header-nav__list">
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
