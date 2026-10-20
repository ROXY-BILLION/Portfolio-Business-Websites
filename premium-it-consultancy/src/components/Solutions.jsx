import "./Solutions.css";

const solutions = [
  {
    number: "01",
    category: "FOR GROWING BUSINESSES",
    title: "Build a stronger digital foundation.",
    description:
      "Replace disconnected tools and manual processes with reliable digital systems that support your next stage of growth.",
    points: [
      "Modern websites and web applications",
      "Connected business workflows",
      "Scalable cloud infrastructure",
    ],
    visual: "foundation",
    icon: "⌘",
  },
  {
    number: "02",
    category: "FOR ENTERPRISE TEAMS",
    title: "Turn complexity into clarity.",
    description:
      "Bring systems, data, and teams together with architecture that improves visibility, efficiency, and decision-making.",
    points: [
      "Enterprise system integration",
      "Data-driven operational insights",
      "Security-focused architecture",
    ],
    visual: "enterprise",
    icon: "◈",
  },
  {
    number: "03",
    category: "FOR FORWARD-THINKING TEAMS",
    title: "Make intelligent technology practical.",
    description:
      "Identify the right opportunities for AI and automation, then integrate them into processes where they create real value.",
    points: [
      "Practical AI implementation",
      "Repetitive task automation",
      "Responsible technology adoption",
    ],
    visual: "intelligence",
    icon: "✳",
  },
];

function SolutionVisual({ solution }) {
  return (
    <div className={`solution-visual solution-visual--${solution.visual}`}>
      <div className="solution-visual__grid"></div>

      <div className="solution-visual__orbit solution-visual__orbit--outer"></div>
      <div className="solution-visual__orbit solution-visual__orbit--inner"></div>

      <div className="solution-visual__center">
        <span>{solution.icon}</span>
        <small>NEXORA</small>
      </div>

      <div className="solution-visual__node solution-visual__node--one">
        <span>01</span>
        <small>Strategy</small>
      </div>

      <div className="solution-visual__node solution-visual__node--two">
        <span>02</span>
        <small>Systems</small>
      </div>

      <div className="solution-visual__node solution-visual__node--three">
        <span>03</span>
        <small>Outcomes</small>
      </div>

      <div className="solution-visual__signal solution-visual__signal--one"></div>
      <div className="solution-visual__signal solution-visual__signal--two"></div>

      <div className="solution-visual__caption">
        <span></span>
        CONNECTED BY DESIGN
      </div>
    </div>
  );
}

function SolutionItem({ solution, reverse }) {
  return (
    <article
      className={`solution-item ${
        reverse ? "solution-item--reverse" : ""
      }`}
    >
      <SolutionVisual solution={solution} />

      <div className="solution-item__content">
        <span className="solution-item__number">{solution.number}</span>

        <span className="solution-item__category">{solution.category}</span>

        <h3>{solution.title}</h3>

        <p className="solution-item__description">
          {solution.description}
        </p>

        <ul className="solution-item__list">
          {solution.points.map((point) => (
            <li key={point}>
              <span aria-hidden="true">✓</span>
              {point}
            </li>
          ))}
        </ul>

        <a href="#contact" className="solution-item__link">
          Explore this solution
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function Solutions() {
  return (
    <section className="solutions section-padding" id="solutions">
      <div className="solutions__container">
        <div className="solutions__heading">
          <span className="section-eyebrow">
            <span></span>
            HOW WE CREATE VALUE
          </span>

          <h2 className="section-title">
            Built around your
            <span> business reality.</span>
          </h2>

          <p className="section-description">
            Every organization has different challenges. We connect the right
            strategy, engineering, and technology to help solve yours.
          </p>
        </div>

        <div className="solutions__list">
          {solutions.map((solution, index) => (
            <SolutionItem
              solution={solution}
              reverse={index % 2 !== 0}
              key={solution.number}
            />
          ))}
        </div>

        <div className="solutions__cta">
          <div>
            <span>HAVE A SPECIFIC CHALLENGE?</span>
            <h3>Let's work out the right approach.</h3>
          </div>

          <a href="#contact">
            Discuss your needs
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Solutions;