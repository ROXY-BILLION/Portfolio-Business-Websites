import "./About.css";

const values = [
  {
    number: "01",
    title: "Think strategically",
    description:
      "We start with the business problem, define the desired outcome, and choose technology that supports it.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Engineer responsibly",
    description:
      "We prioritize maintainability, security, accessibility, and dependable engineering practices.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Build for what comes next",
    description:
      "We design flexible solutions that can evolve as customer needs, teams, and markets change.",
    icon: "↗",
  },
];

const capabilities = [
  "Technology strategy",
  "Application engineering",
  "Cloud architecture",
  "Security-conscious design",
  "System integration",
  "Continuous improvement",
];

function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="about__container">
        <div className="about__main">
          <div className="about__content">
            <span className="section-eyebrow">
              <span></span>
              ABOUT NEXORA
            </span>

            <h2 className="section-title">
              Good technology starts with
              <span> the right questions.</span>
            </h2>

            <p className="about__lead">
              We believe technology creates its greatest value when it makes
              business simpler, decisions clearer, and possibilities bigger.
            </p>

            <p className="about__description">
              Nexora Technologies is presented as a forward-thinking IT
              consultancy focused on helping organizations navigate digital
              change. Our approach combines strategic thinking, thoughtful
              engineering, and a commitment to solutions that serve real needs.
            </p>

            <a href="#contact" className="about__cta">
              Get to know our approach
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about__visual">
            <div className="about__visual-grid"></div>

            <div className="about__visual-orbit about__visual-orbit--outer"></div>
            <div className="about__visual-orbit about__visual-orbit--middle"></div>
            <div className="about__visual-orbit about__visual-orbit--inner"></div>

            <div className="about__visual-core">
              <span>N</span>
              <small>NEXORA</small>
            </div>

            <div className="about__visual-label about__visual-label--top">
              <span></span>
              STRATEGY
            </div>

            <div className="about__visual-label about__visual-label--right">
              <span></span>
              ENGINEERING
            </div>

            <div className="about__visual-label about__visual-label--bottom">
              <span></span>
              IMPACT
            </div>

            <div className="about__visual-caption">
              <span>01 / 03</span>
              <span>OUR APPROACH</span>
            </div>
          </div>
        </div>

        <div className="about__capabilities">
          <div>
            <span className="about__small-label">OUR CAPABILITIES</span>
            <h3>One partner. Multiple perspectives.</h3>
          </div>

          <div className="about__capability-list">
            {capabilities.map((capability) => (
              <span key={capability}>
                <i></i>
                {capability}
              </span>
            ))}
          </div>
        </div>

        <div className="about__values-heading">
          <span className="section-eyebrow">
            <span></span>
            WHAT GUIDES US
          </span>

          <h3>Principles behind every solution.</h3>
        </div>

        <div className="about__values">
          {values.map((value) => (
            <article className="about-value" key={value.number}>
              <div className="about-value__top">
                <span className="about-value__icon">{value.icon}</span>
                <span className="about-value__number">{value.number}</span>
              </div>

              <h4>{value.title}</h4>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;