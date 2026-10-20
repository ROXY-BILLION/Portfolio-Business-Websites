import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "About", href: "#about" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a
          href="#home"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Nexora Technologies home"
        >
          <span className="navbar__logo">N</span>

          <span className="navbar__brand-text">
            <strong>NEXORA</strong>
            <small>TECHNOLOGIES</small>
          </span>
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? "is-active" : ""}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              className="navbar__link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="navbar__cta"
            onClick={closeMenu}
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;