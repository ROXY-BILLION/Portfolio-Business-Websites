import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        ["Home", "#home"],
        ["About", "#about"],
        ["Skills", "#skills"],
        ["Projects", "#projects"],
        ["Contact", "#contact"]
    ];

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="navbar">
            <a href="#home" className="navbar__logo" onClick={closeMenu}>
                Alex<span>.</span>
            </a>

            <button
                className="navbar__toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="navbar-links"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <nav
                id="navbar-links"
                className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
            >
                {links.map(([label, href]) => (
                    <a key={label} href={href} onClick={closeMenu}>
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Navbar;