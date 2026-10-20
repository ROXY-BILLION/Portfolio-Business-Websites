import { useState } from 'react';
import './Navbar.css';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Our work', href: '#projects' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#home" onClick={closeMenu} aria-label="Orbit Digital home">
          ORBIT<span>.</span>
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav id="navbar-links" className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="button button-primary navbar__cta" href="#contact" onClick={closeMenu}>
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
