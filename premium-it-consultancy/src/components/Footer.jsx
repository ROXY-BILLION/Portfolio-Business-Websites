
import "./Footer.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faq" },
];

const footerServices = [
  "Software Development",
  "Cloud Solutions",
  "Cybersecurity",
  "AI & Automation",
  "IT Consulting",
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <a className="footer__logo" href="#home" aria-label="Nexora Technologies home">
              <span className="footer__logo-mark">N</span>

              <span className="footer__logo-text">
                NEXORA
                <span>TECHNOLOGIES</span>
              </span>
            </a>

            <p className="footer__description">
              Technology with purpose. Strategy with clarity.
              Digital solutions designed to move businesses forward.
            </p>

            <a className="footer__cta" href="#contact">
              Discuss your project
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>

          <div className="footer__column">
            <h3>Explore</h3>

            <ul>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3>Our expertise</h3>

            <ul>
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column footer__column--contact">
            <h3>Let's connect</h3>

            <p>
              Have a challenge worth solving? Start a conversation
              about your next digital initiative.
            </p>

            <a className="footer__email-link" href="#contact">
              Start an enquiry
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} Nexora Technologies. All rights reserved.
          </p>

          <a className="footer__back-to-top" href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
