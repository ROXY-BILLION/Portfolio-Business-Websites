
import { useState } from "react";
import "./Navbar.css";

const links = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Our results", href: "#results" },
    { label: "About", href: "#about" }
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="navbar">
            <a className="navbar__brand" href="#home" onClick={closeMenu}>
                <span className="navbar__logo">X</span>
                <span>
                    XENORA
                    <small>TECHNOLOGIES</small>
                </span>
            </a>

            <button
                className="navbar__toggle"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="navbar-menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <nav
                id="navbar-menu"
                className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}
            >
                {links.map((link) => (
                    <a key={link.label} href={link.href} onClick={closeMenu}>
                        {link.label}
                    </a>
                ))}

                <a
                    className="navbar__cta"
                    href="#contact"
                    onClick={closeMenu}
                >
                    Let's talk <span>↗</span>
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
