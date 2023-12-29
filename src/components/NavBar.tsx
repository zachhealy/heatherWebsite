// NavBar.tsx
import React from "react";

interface NavBarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ setActiveSection }) => {
  const handleNavItemClick = (
    section: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setActiveSection(section);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
          onClick={(e) => handleNavItemClick("home", e)}
        >
          <b>HH</b>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/blog"
                onClick={(e) => handleNavItemClick("blog", e)}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/contact"
                onClick={(e) => handleNavItemClick("contact", e)}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
