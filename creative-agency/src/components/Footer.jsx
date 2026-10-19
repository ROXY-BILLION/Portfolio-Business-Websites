
import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <footer className="footer">
            <div className="footer__main">
                <a className="footer__brand" href="#home">
                    NOVA<span>.</span>
                </a>

                <p>
                    Independent creative studio building brands,
                    digital experiences, and meaningful connections.
                </p>

                <a className="footer__cta" href="#contact">
                    Start a project <span>↗</span>
                </a>
            </div>

            <div className="footer__bottom">
                <p>© {currentYear} NOVA Creative. All rights reserved.</p>

                <nav className="footer__links" aria-label="Footer navigation">
                    {footerLinks.map((link) => (
                        <a key={link.label} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    className="footer__back-to-top"
                    href="#home"
                    aria-label="Back to top"
                >
                    ↑
                </a>
            </div>
        </footer>
    );
}

export default Footer;
