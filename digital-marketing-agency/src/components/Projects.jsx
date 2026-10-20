import { useState } from 'react';
import { projects, projectCategories } from '../data/projects';
import SectionHeading from './SectionHeading';
import './Projects.css';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <SectionHeading
          label="Selected work"
          title={<>Proof beats promises. <span className="text-gradient">Every time.</span></>}
          description="A selection of campaigns built around a clear goal, a thoughtful idea, and measurable progress."
        />
        <div className="projects__filters" role="group" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`projects__filter ${activeCategory === category ? 'projects__filter--active' : ''}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects__grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-card__image-wrap">
                  <img src={project.image} alt={`${project.title} campaign visual`} loading="lazy" />
                  <span className="project-card__category">{project.category}</span>
                </div>
                <div className="project-card__content">
                  <div className="project-card__meta"><span>{project.type}</span><span aria-hidden="true">↗</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card__result"><strong>{project.result}</strong><span>{project.resultLabel}</span></div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="projects__empty">No projects found in this category yet. Try another filter.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
