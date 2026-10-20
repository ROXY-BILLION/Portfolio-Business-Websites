import { useState } from "react";
import "./Contact.css";

const initialForm = {
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
};

function Contact() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState("idle");

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value
        }));

        setStatus("idle");
    }

    function handleSubmit(event) {
        event.preventDefault();
        setStatus("success");
        setForm(initialForm);
    }

    return (
        <section className="section contact" id="contact">
            <div className="contact__intro">
                <span className="eyebrow">LET'S BUILD SOMETHING</span>
                <h2>
                    Have a challenge?
                    <br />
                    <span>Let's solve it.</span>
                </h2>
                <p>
                    Tell us about your idea, your business, or the problem
                    you're trying to solve. Let's explore what's possible.
                </p>

                <div className="contact__note">
                    <span className="contact__note-icon">↗</span>
                    <div>
                        <strong>Have a project in mind?</strong>
                        <p>Share the details and outline your goals.</p>
                    </div>
                </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                    <div className="contact-form__field">
                        <label htmlFor="contact-name">Full name</label>
                        <input
                            id="contact-name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            autoComplete="name"
                            required
                        />
                    </div>

                    <div className="contact-form__field">
                        <label htmlFor="contact-email">Email address</label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                        />
                    </div>
                </div>

                <div className="contact-form__row">
                    <div className="contact-form__field">
                        <label htmlFor="contact-company">
                            Company (optional)
                        </label>
                        <input
                            id="contact-company"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Company name"
                            autoComplete="organization"
                        />
                    </div>

                    <div className="contact-form__field">
                        <label htmlFor="contact-service">Service needed</label>
                        <select
                            id="contact-service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose a service</option>
                            <option value="Custom Software">
                                Custom Software
                            </option>
                            <option value="Web Development">
                                Web Development
                            </option>
                            <option value="Backend Engineering">
                                Backend Engineering
                            </option>
                            <option value="Product Innovation">
                                Product Innovation
                            </option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="contact-form__field">
                    <label htmlFor="contact-budget">Estimated budget</label>
                    <select
                        id="contact-budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                    >
                        <option value="">Select a range (optional)</option>
                        <option value="Under $500">Under $500</option>
                        <option value="$500–$2,000">$500–$2,000</option>
                        <option value="$2,000–$5,000">$2,000–$5,000</option>
                        <option value="$5,000+">$5,000+</option>
                        <option value="Not sure">Not sure yet</option>
                    </select>
                </div>

                <div className="contact-form__field">
                    <label htmlFor="contact-message">Project details</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your idea, goals, and timeline..."
                        rows="5"
                        minLength={10}
                        required
                    />
                </div>

                <button className="primary-button contact-form__submit" type="submit">
                    Send project inquiry <span>↗</span>
                </button>

                {status === "success" && (
                    <p className="contact-form__success" role="status">
                        Form validated successfully. No message has been sent
                        because this demo is not connected to an email service.
                    </p>
                )}
            </form>
        </section>
    );
}

export default Contact;
