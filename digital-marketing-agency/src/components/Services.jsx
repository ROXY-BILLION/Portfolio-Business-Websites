import { services } from '../data/services';
import SectionHeading from './SectionHeading';
import './Services.css';

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading
          label="What we do"
          title={<>Good strategy. <span className="text-gradient">Better execution.</span></>}
          description="The right mix of thinking, creativity, and performance to move your business forward."
        />
        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__top"><span>{service.number}</span><span className="service-card__icon" aria-hidden="true">{service.icon}</span></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-card__tags">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href="#contact" className="service-card__link">Let's talk <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
