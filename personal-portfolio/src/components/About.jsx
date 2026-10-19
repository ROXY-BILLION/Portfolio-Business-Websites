import "./About.css";

function About() {
    const stats = [
        { value: "10+", label: "Projects built" },
        { value: "5+", label: "Technologies" },
        { value: "100%", label: "Commitment" }
    ];

    return (
        <section className="about section" id="about">
            <div className="about__heading">
                <p className="eyebrow">GET TO KNOW ME</p>
                <h2>About Me</h2>
            </div>

            <div className="about__content">
                <h3>
                    Turning ideas into meaningful digital experiences.
                </h3>

                <p>
                    I'm a frontend developer passionate about creating
                    accessible, attractive, and user-friendly websites.
                    I enjoy solving problems and continuously improving
                    my development skills.
                </p>
            </div>

            <div className="about__stats">
                {stats.map((stat) => (
                    <div className="about__stat" key={stat.label}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;