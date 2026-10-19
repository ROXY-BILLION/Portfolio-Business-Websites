import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Services", href: "#services" },
        { name: "Work", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <header className="navbar">
            <div className="navbar__container">
                <a href="#home" className="navbar__logo">
                    NOVA<span>®</span>
                </a>

                <button
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                </button>

                <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="navbar__cta"
                        onClick={() => setMenuOpen(false)}
                    >
                        Start a project ↗
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;