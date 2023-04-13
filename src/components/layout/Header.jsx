import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [header, setHeader] = useState(false);

  const headerDisplay = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerDisplay);

    return () => {
      window.removeEventListener("scroll", headerDisplay);
    };
  }, []);

  return (
    <>
      <header className={header ? "header active" : "header"}>
        <nav className="nav_container">
          <div className="logo_container">
            <span className="logo_bracket">&#123;</span>
            LSG
            <span className="logo_bracket">&#125;</span>
          </div>
          <ul className="nav_list">
            <li>Download CV</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
