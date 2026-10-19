import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <a href="#home" className="footer__logo">
                Alex<span>.</span>
            </a>

            <p>Designed and built with React.</p>

            <a href="#home" className="footer__top">
                Back to top ↑
            </a>
        </footer>
    );
}

export default Footer;