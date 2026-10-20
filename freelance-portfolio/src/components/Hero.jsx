import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="status-dot" />
          AVAILABLE FOR SELECT PROJECTS
        </div>

        <p className="hero-intro">Hey, I'm Alex — freelance developer</p>

        <h1>
          I build digital
          <br />
          experiences that
          <br />
          <span>make an impact.</span>
        </h1>

        <p className="hero-description">
          I help ambitious brands and businesses turn ideas into
          beautiful, functional, and user-friendly websites.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work ↗
          </a>
          <a className="button button-outline" href="#contact">
            Let's collaborate
          </a>
        </div>

        <div className="hero-socials">
          <span>FOLLOW MY WORK</span>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-topline">
          <span>INDEPENDENT DEVELOPER</span>
          <span>01 — 04</span>
        </div>

        <div className="visual-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="art-core">
            <span className="core-symbol">{"</>"}</span>
            <span className="core-caption">DESIGN MEETS CODE</span>
          </div>

          <span className="floating-tag tag-top">CREATIVE THINKING ↗</span>
          <span className="floating-tag tag-bottom">BUILT WITH PURPOSE.</span>
          <span className="art-star">✳</span>
        </div>

        <div className="visual-bottomline">
          <span>DESIGN. DEVELOP. DELIVER.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>

      <div className="hero-index">
        <span>01</span>
        <span className="index-line" />
        <span>05</span>
      </div>
    </section>
  );
}
