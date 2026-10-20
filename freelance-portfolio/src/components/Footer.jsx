import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer-inner">
        <a className="brand" href="#home">
          <span className="brand-mark">X.</span>
          <span>
            DEV<span className="brand-light">STUDIO</span>
          </span>
        </a>

        <p>Thoughtful design. Functional code. Digital impact.</p>

        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="#home">Back to top ↑</a>
        </div>

        <span className="copyright">
          © {new Date().getFullYear()} DEVSTUDIO. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
