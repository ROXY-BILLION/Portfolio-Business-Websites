import "./TrustBar.css";

function TrustBar() {
  const principles = [
    {
      number: "01",
      title: "Business-first thinking",
      description: "Technology aligned with your goals.",
    },
    {
      number: "02",
      title: "Security by design",
      description: "Protection built into every layer.",
    },
    {
      number: "03",
      title: "Built to scale",
      description: "Flexible systems ready for growth.",
    },
    {
      number: "04",
      title: "Measurable outcomes",
      description: "Progress you can track and evaluate.",
    },
  ];

  return (
    <section className="trust-bar" id="trust">
      <div className="trust-bar__container">
        <div className="trust-bar__intro">
          <span>THE NEXORA STANDARD</span>
          <p>More than technology. A smarter way forward.</p>
        </div>

        <div className="trust-bar__grid">
          {principles.map((principle) => (
            <article className="trust-bar__item" key={principle.number}>
              <span className="trust-bar__number">{principle.number}</span>

              <div className="trust-bar__content">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;