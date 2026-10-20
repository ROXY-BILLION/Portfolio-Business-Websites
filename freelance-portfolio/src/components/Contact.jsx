import { useState } from "react";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  service: "Website Development",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setFeedback("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Freelance enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject details:\n${formData.message}`
    );

    setFeedback("Opening your email application...");

    window.location.href =
      `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section-shell section-pad contact-section" id="contact">
      <div className="contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>

          <h2>
            Let's make
            <br />
            something <span>great.</span>
          </h2>

          <p>
            Tell me what you're working on. Whether you have a detailed
            brief or just an idea, let's start a conversation.
          </p>

          <a className="contact-email" href="mailto:hello@example.com">
            hello@example.com ↗
          </a>

          <div className="contact-availability">
            <span className="status-dot" />
            Open to freelance opportunities
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              YOUR NAME
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              EMAIL ADDRESS
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            WHAT DO YOU NEED?
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option>Website Development</option>
              <option>Web Application UI</option>
              <option>Website Redesign</option>
              <option>Something else</option>
            </select>
          </label>

          <label>
            TELL ME ABOUT YOUR PROJECT
            <textarea
              name="message"
              rows="5"
              placeholder="A little about your idea, goals, and timeline..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button className="button button-primary form-submit" type="submit">
            Send your enquiry ↗
          </button>

          {feedback && (
            <p className="form-feedback" role="status">
              {feedback}
            </p>
          )}

          <p className="form-note">
            This form prepares an email in your device's email application.
            It does not send messages directly from the website.
          </p>
        </form>
      </div>
    </section>
  );
}
