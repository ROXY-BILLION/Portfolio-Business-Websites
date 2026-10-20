import SectionHeading from "./SectionHeading";
import "./About.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Responsive Design",
  "Git & GitHub",
];

export default function About() {
  return (
    <section className="section-shell about section-pad" id="about">
      <div className="about-top">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title={<>Developer by craft.<br />Problem-solver by nature.</>}
        />

        <div className="about-copy">
          <p>
            I create digital experiences that balance thoughtful design
            with reliable functionality. My focus is building websites
            that look distinctive, work smoothly, and make sense for the
            people using them.
          </p>
          <p>
            From the first idea to the final detail, I care about clean
            code, clear communication, and work that solves real problems.
          </p>
          <a className="text-link" href="#contact">
            Have a project in mind? Let's talk ↗
          </a>
        </div>
      </div>

      <div className="about-bottom">
        <div className="stat">
          <strong>React</strong>
          <span>MY CORE TOOL</span>
        </div>

        <div className="stat">
          <strong>UI + Code</strong>
          <span>MY APPROACH</span>
        </div>

        <div className="stat">
          <strong>100%</strong>
          <span>COMMITMENT TO QUALITY</span>
        </div>

        <div className="skills-block">
          <span className="eyebrow">TOOLS & TECHNOLOGIES</span>
          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
