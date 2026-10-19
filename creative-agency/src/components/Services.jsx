import "./Services.css";

function Services() {
    const services = [
        {
            number: "01",
            title: "Brand Strategy",
            description:
                "Build a clear brand position, communicate your value, and stand out in your market.",
            icon: "✳",
            tags: ["Research", "Positioning"]
        },
        {
            number: "02",
            title: "Visual Identity",
            description:
                "Create a distinctive visual identity that makes your business recognizable.",
            icon: "◈",
            tags: ["Branding", "Art Direction"]
        },
        {
            number: "03",
            title: "Web Development",
            description:
                "Turn your ideas into responsive, modern websites built around your customers.",
            icon: "⌘",
            tags: ["Web Design", "React"]
        },
        {
            number: "04",
            title: "Digital Marketing",
            description:
                "Reach the right audience through creative campaigns and digital experiences.",
            icon: "↗",
            tags: ["Campaigns", "Growth"]
        }
    ];

    return (
        <section className="services" id="services">
            <div className="services__container">
                <div className="services__heading">
                    <p className="services__eyebrow">
                        WHAT WE DO
                    </p>

                    <h2>
                        Good ideas deserve{" "}
                        <span>great execution.</span>
                    </h2>

                    <p className="services__intro">
                        We combine strategy, creativity, and technology
                        to help ambitious businesses move forward.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service) => (
                        <article
                            className="service-card"
                            key={service.number}
                        >
                            <div className="service-card__top">
                                <span className="service-card__number">
                                    {service.number}
                                </span>

                                <span className="service-card__icon">
                                    {service.icon}
                                </span>
                            </div>

                            <h3>{service.title}</h3>

                            <p className="service-card__description">
                                {service.description}
                            </p>

                            <div className="service-card__tags">
                                {service.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                className="service-card__link"
                                aria-label={`Enquire about ${service.title}`}
                            >
                                ↗
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;