import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__container">
                <div className="hero__content">
                    <p className="hero__eyebrow">
                        Independent Creative Studio
                    </p>

                    <h1>
                        Make your brand{" "}
                        <span>impossible</span> to ignore.
                    </h1>

                    <p className="hero__description">
                        We turn ambitious ideas into bold identities,
                        digital experiences, and brands people remember.
                    </p>

                    <div className="hero__actions">
                        <a href="#work" className="hero__button">
                            Explore our work ↗
                        </a>

                        <a href="#services" className="hero__link">
                            What we do ↓
                        </a>
                    </div>

                    <p className="hero__note">
                        Strategy · Design · Digital · Growth
                    </p>
                </div>

                <div className="hero__visual">
                    <img
                        src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85"
                        alt="Colorful graphic design work"
                    />

                    <div className="hero__image-label">
                        Creative by nature.
                        <br />
                        Effective by design.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;