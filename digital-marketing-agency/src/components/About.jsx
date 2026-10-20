import SectionHeading from './SectionHeading';
import './About.css';

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__visual">
          <div className="about__shape about__shape--one" />
          <div className="about__shape about__shape--two" />
          <div className="about__note"><span>OUR APPROACH</span><strong>Curious minds.<br />Clear outcomes.</strong></div>
          <span className="about__asterisk" aria-hidden="true">✳</span>
        </div>
        <div className="about__content">
          <SectionHeading
            label="A little about us"
            title={<>Small enough to care. <span className="text-gradient">Bold enough to move.</span></>}
            description="Orbit is an independent digital marketing studio for teams ready to grow with purpose. We bring strategy, creative, and performance together so every move has a reason."
          />
          <ul className="about__list">
            <li><span>01</span><div><strong>We start with the why.</strong><p>Clear goals before busy work.</p></div></li>
            <li><span>02</span><div><strong>We build with intention.</strong><p>Ideas and execution that work together.</p></div></li>
            <li><span>03</span><div><strong>We measure what matters.</strong><p>Progress you can understand and act on.</p></div></li>
          </ul>
          <a className="button button-outline" href="#contact">Meet your growth partner <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

export default About;
