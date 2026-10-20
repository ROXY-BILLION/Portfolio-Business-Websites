import "./Hero.css";

function Hero() {
  const metrics = [
    { value: "01", label: "Strategic thinking" },
    { value: "02", label: "Engineering excellence" },
    { value: "03", label: "Measurable impact" },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero__orb hero__orb--one"></div>
      <div className="hero__orb hero__orb--two"></div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__status-dot"></span>
            YOUR PARTNER IN DIGITAL TRANSFORMATION
          </div>

          <h1 className="hero__title">
            Technology that moves
            <span> business forward.</span>
          </h1>

          <p className="hero__description">
            We help ambitious businesses turn complex challenges into
            intelligent digital solutions through strategy, engineering,
            and forward-thinking technology.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__button hero__button--primary">
              Start a Conversation
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#services" className="hero__button hero__button--secondary">
              Explore Our Services
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero__metrics">
            {metrics.map((metric) => (
              <div className="hero__metric" key={metric.value}>
                <span className="hero__metric-number">{metric.value}</span>
                <span className="hero__metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-label="Illustration of a digital analytics dashboard">
          <div className="hero__visual-glow"></div>

          <div className="hero__dashboard">
            <div className="hero__dashboard-top">
              <div className="hero__window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="hero__dashboard-label">NEXORA / INSIGHTS</span>

              <span className="hero__live">
                <span></span>
                LIVE
              </span>
            </div>

            <div className="hero__dashboard-body">
              <div className="hero__dashboard-heading">
                <div>
                  <span className="hero__muted-label">PERFORMANCE OVERVIEW</span>
                  <h2>Growth intelligence</h2>
                </div>

                <span className="hero__period">Last 30 days</span>
              </div>

              <div className="hero__stat-grid">
                <div className="hero__stat">
                  <span>Digital reach</span>
                  <strong>+38.6%</strong>
                  <small>↗ Positive momentum</small>
                </div>

                <div className="hero__stat">
                  <span>System health</span>
                  <strong>99.9%</strong>
                  <small>● All systems ready</small>
                </div>
              </div>

              <div className="hero__chart-card">
                <div className="hero__chart-heading">
                  <span>Growth trajectory</span>
                  <span>+24.8%</span>
                </div>

                <div className="hero__chart">
                  <div className="hero__chart-grid">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <svg
                    viewBox="0 0 420 150"
                    role="img"
                    aria-label="Illustrative upward-trending performance chart"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#56e0e8" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#56e0e8" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 125 C35 112, 48 118, 75 95 S120 110, 150 78 S200 91, 230 60 S270 76, 305 48 S350 59, 385 25 L420 12 L420 150 L0 150 Z"
                      fill="url(#heroChartFill)"
                    />

                    <path
                      d="M0 125 C35 112, 48 118, 75 95 S120 110, 150 78 S200 91, 230 60 S270 76, 305 48 S350 59, 385 25 L420 12"
                      fill="none"
                      stroke="#56e0e8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle cx="420" cy="12" r="5" fill="#56e0e8" />
                  </svg>
                </div>

                <div className="hero__chart-labels">
                  <span>WEEK 01</span>
                  <span>WEEK 02</span>
                  <span>WEEK 03</span>
                  <span>WEEK 04</span>
                </div>
              </div>

              <div className="hero__dashboard-footer">
                <span><i className="hero__footer-dot"></i> Analytics connected</span>
                <span>Illustrative preview</span>
              </div>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--top">
            <span className="hero__floating-icon">✳</span>
            <div>
              <strong>Smart solutions</strong>
              <small>Designed for growth</small>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <span className="hero__floating-check">✓</span>
            <div>
              <strong>Built for tomorrow</strong>
              <small>Secure. Scalable. Intelligent.</small>
            </div>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#trust">
        <span></span>
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}

export default Hero;