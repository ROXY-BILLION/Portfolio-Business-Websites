import SectionHeading from "./SectionHeading";
import "./Services.css";

const services = [
  {
    number: "01",
    icon: "↗",
    title: "Website Development",
    description:
      "Fast, modern websites designed to communicate your brand and turn visitors into clients.",
    tags: ["React", "Responsive design", "Performance"],
  },
  {
    number: "02",
    icon: "▧",
    title: "Web Application UI",
    description:
      "Interactive interfaces and dashboards that make complex digital products feel simple.",
    tags: ["React", "JavaScript", "Components"],
  },
  {
    number: "03",
    icon: "✳",
    title: "Website Redesign",
    description:
      "Give your existing website a fresh visual identity, improved layout, and better usability.",
    tags: ["UI improvement", "Mobile layouts", "CSS"],
  },
];

export default function Services() {
  return (
    <section className="section-shell section-pad" id="services">
      <div className="services-heading">
        <SectionHeading
          eyebrow="WHAT I DO"
          title={<>Digital solutions,<br />built around your goals.</>}
          description="From the first sketch to the final deployment, I help bring your digital ideas to life."
        />
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-top">
              <span>{service.number} / SERVICE</span>
              <span className="service-icon">{service.icon}</span>
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
