
import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value
        }));

        setSubmitted(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            service: "",
            message: ""
        });
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__intro">
                <span className="section-label">HAVE A PROJECT IN MIND?</span>

                <h2>
                    Let's make
                    <br />
                    <span>something matter.</span>
                </h2>

                <p>
                    Tell us what you're building. We'll bring the ideas,
                    strategy, and creative energy to help make it happen.
                </p>

                <a href="mailto:hello@novacreative.example">
                    hello@novacreative.example
                </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__field">
                    <label htmlFor="name">Your name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="contact-form__field">
                    <label htmlFor="email">Email address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="contact-form__field">
                    <label htmlFor="service">What do you need?</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a service</option>
                        <option value="Brand Strategy">Brand Strategy</option>
                        <option value="Visual Identity">Visual Identity</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                </div>

                <div className="contact-form__field">
                    <label htmlFor="message">Tell us about your project</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="A little about your idea, goals, or timeline..."
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                    />
                </div>

                <button className="contact-form__submit" type="submit">
                    Send inquiry <span>↗</span>
                </button>

                {submitted && (
                    <p className="contact-form__success" role="status">
                        Thanks for reaching out! Your form passed validation.
                        Connect a backend or email service to send inquiries.
                    </p>
                )}
            </form>
        </section>
    );
}

export default Contact;
