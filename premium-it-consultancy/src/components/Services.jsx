import "./Services.css";

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Custom Software Development",
    description:
      "Purpose-built software designed around your workflows, customers, and business objectives.",
    tags: ["Web Applications", "Business Systems", "API Development"],
    featured: true,
  },
  {
    number: "02",
    icon: "◈",
    title: "Cloud & Infrastructure",
    description:
      "Modernize your infrastructure with scalable cloud environments and reliable deployment workflows.",
    tags: ["Cloud Migration", "DevOps", "Infrastructure"],
  },
  {
    number: "03",
    icon: "⌁",
    title: "Cybersecurity",
    description:
      "Strengthen your security posture with practical risk management and defense-focused engineering.",
    tags: ["Security Audits", "Risk Assessment", "Protection"],
  },
  {
    number: "04",
    icon: "✳",
    title: "AI & Intelligent Automation",
    description:
      "Reduce repetitive work and unlock new opportunities with carefully integrated AI solutions.",
    tags: ["AI Integration", "Automation", "Data Intelligence"],
  },
  {
    number: "05",
    icon: "▦",
    title: "Digital Transformation",
    description:
      "Improve customer experiences and internal processes by connecting people, systems, and data.",
    tags: ["Process Design", "System Integration", "Consulting"],
  },
  {
    number: "06",
    icon: "↗",
    title: "Technology Consulting",
    description:
      "Make confident technology decisions with a clear roadmap built around your priorities.",
    tags: ["Technical Strategy", "Architecture", "Roadmaps"],
  },
];

function ServiceCard({ service }) {
  return (
    <article
      className={`service-card ${
        service.featured ? "service-card--featured" : ""
      }`}
    >
      <div className="service-card__top">
        <span className="service-card__icon" aria-hidden="true">
          {service.icon}
        </span>

        <span className="service-card__number">{service.number}</span>
      </div>

      <h3 className="service-card__title">{service.title}</h3>

      <p className="service-card__description">{service.description}</p>

      <div className="service-card__tags">
        {service.tags.map((tag) => (
          <span className="service-card__tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#contact"
        className="service-card__link"
        aria-label={`Discuss ${service.title}`}
      >
        Discuss this service
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="services__container">
        <div className="services__heading">
          <div className="services__intro">
            <span className="section-eyebrow">
              <span></span>
              WHAT WE DO
            </span>

            <h2 className="section-title">
              Technology solutions.
              <span> Business results.</span>
            </h2>

            <p className="section-description">
              From the first strategic conversation to implementation and
              optimization, we help businesses build technology that solves
              meaningful problems.
            </p>
          </div>

          <a href="#contact" className="services__heading-link">
            Discuss your project
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.number} />
          ))}
        </div>

        <div className="services__bottom">
          <span className="services__bottom-line"></span>
          <p>
            Not sure what you need? We’ll help you identify the right starting
            point.
          </p>
          <a href="#contact">Talk to our team ↗</a>
        </div>
      </div>
    </section>
  );
}

export default Services;