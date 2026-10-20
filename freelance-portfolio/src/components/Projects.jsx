
import { useState } from "react";
import projects from "../data/projects";
import SectionHeading from "./SectionHeading";
import "./Projects.css";

const categories = ["All", "Websites", "Web Apps"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="projects-section section-pad" id="projects">
      <div className="section-shell">
        <div className="projects-heading">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title={<>Ideas turned into<br />digital experiences.</>}
            description="A selection of concept projects demonstrating my approach to design and development."
          />

          <a className="text-link projects-view-link" href="#contact">
            Start a project ↗
          </a>
        </div>

        <div className="project-filters" aria-label="Filter projects">
          {categories.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((project) => project.category === category).length;

            return (
              <button
                type="button"
                key={category}
                className={`filter-button ${
                  activeCategory === category ? "filter-active" : ""
                }`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                <span>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <a
                className="project-image"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} demo`}
              >
                <img src={project.image} alt={`${project.title} preview`} />
                <span className="project-number">{project.number}</span>
                <span className="project-open">↗</span>
              </a>

              <div className="project-info">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note">
          These are sample portfolio entries. Replace them with your own
          projects and live links before publishing.
        </p>
      </div>
    </section>
  );
}
