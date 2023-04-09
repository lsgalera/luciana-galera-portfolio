import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav_container">
        <div className="logo_container">
          <span className="logo_bracket">&#123;</span>
          LSG
          <span className="logo_bracket">&#125;</span>
        </div>
        <ul className="nav_list">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
