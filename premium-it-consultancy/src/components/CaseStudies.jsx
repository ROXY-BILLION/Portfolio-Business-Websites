
import { useState } from "react";
import "./CaseStudies.css";
import { caseStudies } from "../data/caseStudies";

function CaseStudyCard({ project }) {
  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];

  return (
    <article className="case-studies__card">
      <div
        className={`case-studies__visual case-studies__visual--${
          project.visual || "default"
        }`}
      >
        <div className="case-studies__visual-grid" />

        <span className="case-studies__visual-icon" aria-hidden="true">
          {project.icon || "◈"}
        </span>

        <span className="case-studies__visual-number">
          {project.number || "—"}
        </span>

        <span className="case-studies__visual-label">
          {project.type || project.category || "TECHNOLOGY"}
        </span>

        <div className="case-studies__visual-orbit case-studies__visual-orbit--one" />
        <div className="case-studies__visual-orbit case-studies__visual-orbit--two" />
      </div>

      <div className="case-studies__content">
        <div className="case-studies__meta">
          <span>{project.category || "General"}</span>
          <span>{project.year || "2026"}</span>
        </div>

        <h3 className="case-studies__title">
          {project.title || "Untitled Project"}
        </h3>

        <p className="case-studies__description">
          {project.description || "Project details coming soon."}
        </p>

        {technologies.length > 0 && (
          <div className="case-studies__technologies">
            {technologies.map((technology, index) => (
              <span key={`${project.number || project.title}-${technology}-${index}`}>
                {technology}
              </span>
            ))}
          </div>
        )}

        <a className="case-studies__link" href="#contact">
          Discuss a similar project
          <span aria-hidden="true"> ↗</span>
        </a>
      </div>
    </article>
  );
}

function CaseStudies() {
  const projects = Array.isArray(caseStudies) ? caseStudies : [];

  const categories = [
    "All",
    ...new Set(
      projects
        .map((project) => project.category)
        .filter(Boolean)
    ),
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      className="case-studies section-padding"
      id="case-studies"
    >
      <div className="case-studies__container">
        <div className="case-studies__header">
          <div className="case-studies__heading">
            <span className="section-eyebrow">
              SELECTED WORK & CONCEPTS
            </span>

            <h2 className="section-heading">
              Ideas transformed into
              <span className="gradient-text"> digital impact.</span>
            </h2>

            <p className="section-description">
              Explore technology concepts demonstrating how thoughtful
              engineering can help solve business challenges.
            </p>
          </div>

          <div className="case-studies__counter">
            <span className="case-studies__counter-number">
              {String(filteredProjects.length).padStart(2, "0")}
            </span>
            <span className="case-studies__counter-label">
              {filteredProjects.length === 1
                ? "PROJECT"
                : "PROJECTS"}
            </span>
          </div>
        </div>

        <div
          className="case-studies__filters"
          aria-label="Filter case studies by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`case-studies__filter ${
                activeCategory === category
                  ? "case-studies__filter--active"
                  : ""
              }`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="case-studies__grid">
            {filteredProjects.map((project, index) => (
              <CaseStudyCard
                key={
                  project.slug ||
                  project.number ||
                  `${project.title || "project"}-${index}`
                }
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="case-studies__empty">
            <span aria-hidden="true">⌕</span>
            <h3>No projects found</h3>
            <p>
              There are no projects in this category yet.
              Select another category to explore more.
            </p>

            <button
              type="button"
              className="case-studies__filter case-studies__filter--active"
              onClick={() => setActiveCategory("All")}
            >
              View all projects
            </button>
          </div>
        )}

        <p className="case-studies__disclaimer">
          These are illustrative project concepts for demonstration
          purposes, not claims of completed client engagements.
        </p>
      </div>
    </section>
  );
}

export default CaseStudies;
