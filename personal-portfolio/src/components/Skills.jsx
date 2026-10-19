import "./Skills.css";

function Skills() {
    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Git",
        "Responsive Design"
    ];

    return (
        <section className="skills section" id="skills">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>Skills & Technologies</h2>

            <div className="skills__grid">
                {skills.map((skill) => (
                    <article className="skills__card" key={skill}>
                        <span className="skills__dot" />
                        <h3>{skill}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Skills;