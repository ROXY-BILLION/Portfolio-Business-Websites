
import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__glow hero__glow--one" />
            <div className="hero__glow hero__glow--two" />

            <div className="hero__content">
                <div className="hero__badge">
                    <span className="hero__status-dot" />
                    SOFTWARE BUILT FOR WHAT'S NEXT
                </div>

                <h1>
                    We engineer
                    <br />
                    <span>what's next.</span>
                </h1>

                <p className="hero__description">
                    We help ambitious businesses turn complex challenges into
                    powerful digital products, intelligent software, and
                    experiences built to scale.
                </p>

                <div className="hero__actions">
                    <a className="primary-button" href="#contact">
                        Start a project <span>↗</span>
                    </a>

                    <a className="secondary-button" href="#solutions">
                        Explore our work <span>↓</span>
                    </a>
                </div>

                <div className="hero__trust">
                    <span>PRODUCT THINKING</span>
                    <span>ENGINEERING</span>
                    <span>REAL-WORLD IMPACT</span>
                </div>
            </div>

            <div className="hero__visual" aria-label="Abstract digital technology artwork">
                <div className="hero__orbit hero__orbit--outer" />
                <div className="hero__orbit hero__orbit--inner" />

                <div className="hero__core">
                    <span>X</span>
                    <small>BUILD BEYOND</small>
                </div>

                <div className="hero__floating-card hero__floating-card--top">
                    <span className="hero__card-icon">⌘</span>
                    <span>
                        <strong>Digital products</strong>
                        <small>Designed to perform</small>
                    </span>
                </div>

                <div className="hero__floating-card hero__floating-card--bottom">
                    <span className="hero__live-dot" />
                    <span>
                        <strong>Systems online</strong>
                        <small>Ready to scale</small>
                    </span>
                </div>
            </div>

            <a className="hero__scroll" href="#services">
                SCROLL TO EXPLORE <span>↓</span>
            </a>
        </section>
    );
}

export default Hero;
