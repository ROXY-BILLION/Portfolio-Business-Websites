import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__eyebrow"><span className="hero__eyebrow-dot" /> Independent digital growth studio</span>
          <h1>Make your next move <span className="text-gradient">matter.</span></h1>
          <p className="hero__description">
            We help ambitious brands get noticed, win customers, and grow with marketing that means business.
          </p>
          <div className="hero__actions">
            <a className="button button-primary" href="#contact">Build your momentum <span aria-hidden="true">↗</span></a>
            <a className="button button-outline" href="#projects">Explore our work</a>
          </div>
          <div className="hero__proof">
            <div className="hero__avatars" aria-hidden="true"><span>J</span><span>M</span><span>A</span></div>
            <p><strong>Built around your goals.</strong><br />Strategy, creative, and performance together.</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract campaign performance dashboard illustration">
          <div className="hero-visual__top"><span>Campaign overview</span><span className="hero-visual__status">● Live</span></div>
          <div className="hero-visual__metric">
            <span>Total conversions</span><strong>8,492</strong><small>↗ 24.8% this month</small>
          </div>
          <div className="hero-chart" aria-label="Illustrative rising campaign chart">
            {[35, 48, 40, 63, 52, 70, 64, 88, 76, 100].map((height, index) => (
              <span key={index} style={{ '--bar-height': `${height}%` }} />
            ))}
          </div>
          <div className="hero-visual__bottom">
            <div><span className="hero-visual__dot hero-visual__dot--orange" /> Audience growth <strong>+38%</strong></div>
            <div><span className="hero-visual__dot hero-visual__dot--cream" /> Conversion rate <strong>6.4%</strong></div>
          </div>
          <div className="hero-sticker"><span>GOOD</span><strong>IDEAS</strong><span>GROW HERE ↗</span></div>
        </div>
      </div>
      <div className="hero__bottom-line container"><span>Strategy first. Results always.</span><span>Scroll to explore ↓</span></div>
    </section>
  );
}

export default Hero;
