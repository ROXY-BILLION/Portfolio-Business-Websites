
import "./Services.css";

const services = [
    {
        number: "01",
        icon: "⌘",
        title: "Custom Software",
        description: "Purpose-built software that streamlines operations and solves real business problems.",
        tags: ["Business Systems", "Automation", "Integrations"]
    },
    {
        number: "02",
        icon: "◇",
        title: "Web Development",
        description: "Fast, responsive digital experiences engineered for usability, performance, and growth.",
        tags: ["React", "Frontend", "Web Apps"]
    },
    {
        number: "03",
        icon: "⌁",
        title: "Backend Engineering",
        description: "Reliable APIs, structured data, and scalable foundations for demanding applications.",
        tags: ["APIs", "Databases", "Architecture"]
    },
    {
        number: "04",
        icon: "✳",
        title: "Product Innovation",
        description: "From early concepts to working prototypes, we turn promising ideas into useful products.",
        tags: ["Prototyping", "UX Strategy", "MVPs"]
    }
];

function Services() {
    return (
        <section className="section services" id="services">
            <div className="section-heading">
                <span className="eyebrow">WHAT WE DO</span>
                <h2>Technology that moves business forward.</h2>
                <p>
                    We combine strategic thinking, thoughtful design, and
                    engineering to create digital solutions with a purpose.
                </p>
            </div>

            <div className="services__grid">
                {services.map((service) => (
                    <article className="service-card" key={service.number}>
                        <div className="service-card__top">
                            <span className="service-card__icon">
                                {service.icon}
                            </span>
                            <span className="service-card__number">
                                {service.number}
                            </span>
                        </div>

                        <h3>{service.title}</h3>
                        <p>{service.description}</p>

                        <div className="service-card__tags">
                            {service.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>

                        <a href="#contact" className="service-card__link">
                            Discuss your project <span>↗</span>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Services;
