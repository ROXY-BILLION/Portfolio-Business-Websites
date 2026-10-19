
import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Founder, Sunday Supply",
        quote: "NOVA transformed our brand into something that truly reflects who we are. The entire process felt thoughtful, creative, and professional."
    },
    {
        name: "Daniel Brooks",
        role: "CEO, Digital Horizon",
        quote: "Our new website completely changed how customers experience our business. The design is beautiful, fast, and easy to use."
    },
    {
        name: "Amara Johnson",
        role: "Marketing Director, Good Habit",
        quote: "From strategy to execution, NOVA understood our vision and turned it into a campaign that connected with our audience."
    }
];

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const currentTestimonial = testimonials[activeIndex];

    function showPrevious() {
        setActiveIndex((currentIndex) =>
            currentIndex === 0
                ? testimonials.length - 1
                : currentIndex - 1
        );
    }

    function showNext() {
        setActiveIndex((currentIndex) =>
            currentIndex === testimonials.length - 1
                ? 0
                : currentIndex + 1
        );
    }

    return (
        <section className="testimonials" id="about">
            <div className="testimonials__header">
                <span className="section-label">CLIENT STORIES</span>
                <h2>
                    Good work.
                    <br />
                    <span>Real relationships.</span>
                </h2>
            </div>

            <div className="testimonial-card" aria-live="polite">
                <span className="testimonial-card__quote-mark">
                    “
                </span>

                <p className="testimonial-card__quote">
                    {currentTestimonial.quote}
                </p>

                <div className="testimonial-card__bottom">
                    <div>
                        <h3>{currentTestimonial.name}</h3>
                        <p>{currentTestimonial.role}</p>
                    </div>

                    <div className="testimonial-card__controls">
                        <button
                            type="button"
                            onClick={showPrevious}
                            aria-label="Previous testimonial"
                        >
                            ←
                        </button>

                        <span>
                            {String(activeIndex + 1).padStart(2, "0")}
                            {" / "}
                            {String(testimonials.length).padStart(2, "0")}
                        </span>

                        <button
                            type="button"
                            onClick={showNext}
                            aria-label="Next testimonial"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
