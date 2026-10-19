
import { useState } from "react";
import "./Projects.css";

const projects = [
    {
        id: 1,
        name: "Nexa Commerce",
        category: "Web Applications",
        type: "E-commerce platform",
        description: "A streamlined online shopping experience with product discovery, cart interactions, and responsive layouts.",
        technologies: ["React", "CSS", "JavaScript"],
        color: "blue",
        outcome: "A clearer, more convenient customer shopping journey."
    },
    {
        id: 2,
        name: "Vertex Analytics",
        category: "Business Systems",
        type: "Analytics dashboard",
        description: "A data-focused dashboard concept for presenting operational metrics in an organized interface.",
        technologies: ["React", "Charts", "CSS"],
        color: "violet",
        outcome: "Important business indicators are easier to understand."
    },
    {
        id: 3,
        name: "Orbit Connect",
        category: "Web Applications",
        type: "Communication platform",
        description: "A responsive interface concept for bringing conversations, updates, and team workflows together.",
        technologies: ["React", "JavaScript", "UI Design"],
        color: "cyan",
        outcome: "A more consistent experience across screen sizes."
    },
    {
        id: 4,
        name: "CoreFlow",
        category: "Business Systems",
        type: "Workflow management",
        description: "A workflow product concept focused on clear task states, organized information, and efficient navigation.",
        technologies: ["React", "CSS", "UX"],
        color: "pink",
        outcome: "Complex workflows presented through a simpler interface."
    },
    {
        id: 5,
        name: "Aether Cloud",
        category: "Cloud & APIs",
        type: "Cloud management concept",
        description: "A clean interface concept for presenting infrastructure status and technical resources.",
        technologies: ["React", "REST APIs", "CSS"],
        color: "blue",
        outcome: "Technical information organized for faster scanning."
    },
    {
        id: 6,
        name: "Pulse Health",
        category: "Web Applications",
        type: "Wellness web experience",
        description: "A mobile-friendly wellness interface concept with readable information and straightforward navigation.",
        technologies: ["React", "Responsive CSS", "JavaScript"],
        color: "cyan",
        outcome: "A more accessible and focused user experience."
    }
];

const categories = [
    "All",
    "Web Applications",
    "Business Systems",
    "Cloud & APIs"
];

function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projects.filter(
        (project) =>
            activeCategory === "All" ||
            project.category === activeCategory
    );

    function closeModal() {
        setSelectedProject(null);
    }

    function handleModalKeyDown(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }

    return (
        <section className="section projects" id="solutions">
            <div className="section-heading">
                <span className="eyebrow">SELECTED WORK</span>
                <h2>Ideas turned into digital experiences.</h2>
                <p>
                    Explore example product concepts that demonstrate how we
                    approach design, usability, and engineering.
                </p>
            </div>

            <div className="projects__filters" aria-label="Filter projects">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={
                            activeCategory === category
                                ? "projects__filter projects__filter--active"
                                : "projects__filter"
                        }
                        onClick={() => setActiveCategory(category)}
                        aria-pressed={activeCategory === category}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <p className="projects__count" aria-live="polite">
                Showing {filteredProjects.length} projects
            </p>

            <div className="projects__grid">
                {filteredProjects.map((project) => (
                    <article className="project-card" key={project.id}>
                        <button
                            className={`project-card__visual project-card__visual--${project.color}`}
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            aria-label={`View ${project.name} details`}
                        >
                            <span className="project-card__window">
                                <span className="project-card__window-dots">
                                    <i />
                                    <i />
                                    <i />
                                </span>
                                <span className="project-card__mock">
                                    <span className="project-card__mock-sidebar" />
                                    <span className="project-card__mock-content">
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                    </span>
                                </span>
                            </span>
                            <span className="project-card__open">↗</span>
                        </button>

                        <div className="project-card__info">
                            <div>
                                <span className="project-card__category">
                                    {project.category}
                                </span>
                                <h3>{project.name}</h3>
                                <p>{project.type}</p>
                            </div>

                            <button
                                className="project-card__details"
                                type="button"
                                onClick={() => setSelectedProject(project)}
                            >
                                View details <span>↗</span>
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {selectedProject && (
                <div
                    className="project-modal"
                    onClick={closeModal}
                    onKeyDown={handleModalKeyDown}
                    role="presentation"
                >
                    <article
                        className="project-modal__content"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="project-modal__close"
                            type="button"
                            onClick={closeModal}
                            aria-label="Close project details"
                        >
                            ✕
                        </button>

                        <span className="eyebrow">
                            {selectedProject.category}
                        </span>
                        <h2 id="project-modal-title">
                            {selectedProject.name}
                        </h2>
                        <p className="project-modal__type">
                            {selectedProject.type}
                        </p>
                        <p>{selectedProject.description}</p>

                        <h3>Technologies</h3>
                        <div className="project-modal__tags">
                            {selectedProject.technologies.map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>

                        <h3>Project objective</h3>
                        <p>{selectedProject.outcome}</p>

                        <a
                            className="primary-button"
                            href="#contact"
                            onClick={closeModal}
                        >
                            Discuss a similar project <span>↗</span>
                        </a>
                    </article>
                </div>
            )}
        </section>
    );
}

export default Projects;
