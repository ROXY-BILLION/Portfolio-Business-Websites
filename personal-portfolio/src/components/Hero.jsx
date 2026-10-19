import "./Hero.css";

function Hero() {
    return (
        <section className="hero section" id="home">
            <div className="hero__content">
                <p className="hero__eyebrow">
                    FRONTEND DEVELOPER
                </p>

                <h1>
                    Building digital
                    <span> experiences.</span>
                </h1>

                <p className="hero__description">
                    Hi, I'm Alex. I create modern, responsive websites
                    that combine thoughtful design with useful functionality.
                </p>

                <div className="hero__actions">
                    <a href="#projects" className="button button--primary">
                        Explore My Work ↗
                    </a>

                    <a href="#contact" className="button button--outline">
                        Contact Me
                    </a>
                </div>

                <p className="hero__availability">
                    <span /> Available for opportunities
                </p>
            </div>

            <div className="hero__image-wrapper">
                <img
                    className="hero__image"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
                    alt="Developer working on a laptop"
                    onError={(event) => {
                        event.currentTarget.style.display = "none";
                    }}
                />

                <div className="hero__image-label">
                    <span>✦</span>
                    Creative Developer
                </div>
            </div>
        </section>
    );
}

export default Hero;