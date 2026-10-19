import { useState } from "react";
import "./Projects.css";

const projects = [
    {
        title: "Sunday Supply",
        category: "Branding",
        type: "Brand Identity",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
        description: "A bold visual identity for a modern lifestyle brand."
    },
    {
        title: "Digital Horizon",
        category: "Websites",
        type: "Website Design",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
        description: "A clean digital experience built to turn visitors into customers."
    },
    {
        title: "Good Habit",
        category: "Campaigns",
        type: "Creative Campaign",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
        description: "A memorable campaign concept designed to spark engagement."
    },
    {
        title: "Mono Studio",
        category: "Branding",
        type: "Brand Direction",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
        description: "A minimal identity for a design-focused interiors studio."
    },
    {
        title: "Northstar",
        category: "Websites",
        type: "Landing Page",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
        description: "A product-focused website with a clear, compelling message."
    },
    {
        title: "New Ritual",
        category: "Campaigns",
        type: "Launch Campaign",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
        description: "An editorial campaign concept for a new lifestyle launch."
    }
];

const categories = ["All", "Branding", "Websites", "Campaigns"];

function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === activeCategory
              );

    return (
        <section className="projects" id="work">
            <div className="projects__container">
                <div className="projects__heading">
                    <p className="projects__eyebrow">
                        SELECTED WORK
                    </p>

                    <h2>
                        Ideas made <span>real.</span>
                    </h2>

                    <p>
                        A selection of identities, websites, and campaigns
                        created to help brands stand out.
                    </p>
                </div>

                <div
                    className="projects__filters"
                    aria-label="Filter projects by category"
                >
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

                <div className="projects__grid">
                    {filteredProjects.map((project, index) => (
                        <article
                            className="project-card"
                            key={project.title}
                        >
                            <div className="project-card__image">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project`}
                                    loading="lazy"
                                />

                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="project-card__details">
                                <div>
                                    <p>
                                        {project.category} / {project.type}
                                    </p>

                                    <h3>{project.title}</h3>
                                </div>

                                <span className="project-card__arrow">
                                    ↗
                                </span>
                            </div>

                            <p className="project-card__description">
                                {project.description}
                            </p>
                        </article>
                    ))}
                </div>

                <p className="projects__count" aria-live="polite">
                    Showing {filteredProjects.length}{" "}
                    {filteredProjects.length === 1 ? "project" : "projects"}
                </p>
            </div>
        </section>
    );
}

export default Projects;