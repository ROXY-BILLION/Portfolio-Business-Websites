import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div>
            <a className="footer__logo" href="#home">ORBIT<span>.</span></a>
            <p>Independent thinking for ambitious brands.</p>
          </div>
          <div className="footer__links">
            <a href="#services">Services</a>
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="footer__back" href="#home">Back to top ↑</a>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Orbit Digital. Practice project.</span>
          <span>Strategy first. Results always.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
