import "./Projects.css";

function Projects() {
    const projects = [
        {
            number: "01",
            title: "Portfolio Website",
            category: "Web Development",
            description: "A modern portfolio showcasing creative work.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
            alt: "Website analytics and dashboard displayed on a screen"
        },
        {
            number: "02",
            title: "Creative Agency",
            category: "Web Design",
            description: "A polished website for a digital creative agency.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
            alt: "Laptop displaying code on a developer's desk"
        },
        {
            number: "03",
            title: "Digital Experience",
            category: "Frontend Development",
            description: "A clean interface designed around user experience.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
            alt: "Computer displaying a website design"
        }
    ];

    return (
        <section className="projects section" id="projects">
            <div className="projects__heading">
                <div>
                    <p className="eyebrow">SELECTED WORK</p>
                    <h2>Featured Projects</h2>
                </div>

                <span className="projects__count">03 PROJECTS</span>
            </div>

            <div className="projects__grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.number}>
                        <div className="project-card__image-wrapper">
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="project-card__image"
                                loading="lazy"
                            />

                            <span className="project-card__number">
                                {project.number}
                            </span>
                        </div>

                        <div className="project-card__content">
                            <p className="project-card__category">
                                {project.category}
                            </p>

                            <h3>{project.title}</h3>

                            <p className="project-card__description">
                                {project.description}
                            </p>

                            <a href="#contact" className="project-card__link">
                                Discuss a project <span>↗</span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;