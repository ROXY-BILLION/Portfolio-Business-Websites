
import "./Footer.css";

const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#contact" }
];

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__brand-block">
                    <a className="footer__brand" href="#home">
                        <span>X</span> XENORA
                    </a>
                    <p>
                        Engineering thoughtful digital products for
                        businesses ready to move forward.
                    </p>
                </div>

                <div className="footer__navigation">
                    <h3>Explore</h3>
                    {footerLinks.map((link) => (
                        <a key={link.label} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="footer__contact">
                    <h3>Have an idea?</h3>
                    <p>Let's turn your next challenge into an opportunity.</p>
                    <a href="#contact">
                        Start a conversation <span>↗</span>
                    </a>
                </div>
            </div>

            <div className="footer__bottom">
                <p>© {year} XENORA Technologies. All rights reserved.</p>
                <a href="#home" className="footer__top">
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
}

export default Footer;
