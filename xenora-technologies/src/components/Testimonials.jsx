
import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
    {
        name: "Jordan Ellis",
        role: "Product Lead",
        company: "Nexa Commerce",
        quote: "The team approached our product challenge with clarity and care. The result was a much more focused user experience."
    },
    {
        name: "Priya Morgan",
        role: "Operations Manager",
        company: "Vertex Analytics",
        quote: "The dashboard concept helped us rethink how our information should be presented. The attention to usability stood out."
    },
    {
        name: "Samuel Carter",
        role: "Founder",
        company: "Orbit Connect",
        quote: "We wanted an interface that felt modern without being confusing. The design direction brought that vision together."
    }
];

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonial = testimonials[activeIndex];

    function showPrevious() {
        setActiveIndex((index) =>
            index === 0 ? testimonials.length - 1 : index - 1
        );
    }

    function showNext() {
        setActiveIndex((index) =>
            index === testimonials.length - 1 ? 0 : index + 1
        );
    }

    return (
        <section className="section testimonials" id="about">
            <div className="section-heading">
                <span className="eyebrow">CLIENT PERSPECTIVES</span>
                <h2>Good technology starts with understanding people.</h2>
            </div>

            <article className="testimonial" aria-live="polite">
                <span className="testimonial__mark">“</span>

                <p className="testimonial__quote">{testimonial.quote}</p>

                <div className="testimonial__bottom">
                    <div className="testimonial__person">
                        <div className="testimonial__avatar">
                            {testimonial.name.charAt(0)}
                        </div>
                        <div>
                            <strong>{testimonial.name}</strong>
                            <span>
                                {testimonial.role} · {testimonial.company}
                            </span>
                        </div>
                    </div>

                    <div className="testimonial__controls">
                        <span>
                            {String(activeIndex + 1).padStart(2, "0")} /{" "}
                            {String(testimonials.length).padStart(2, "0")}
                        </span>
                        <button
                            type="button"
                            onClick={showPrevious}
                            aria-label="Previous testimonial"
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            onClick={showNext}
                            aria-label="Next testimonial"
                        >
                            →
                        </button>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Testimonials;
