
import { useState } from "react";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const services = [
  "Software Development",
  "Cloud Solutions",
  "Cybersecurity",
  "AI & Automation",
  "IT Consulting",
  "Digital Transformation",
];

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setSubmitted(false);
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message =
        "Please enter at least 10 characters about your project.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(initialForm);
  }

  return (
    <section className="contact section-padding" id="contact">
      <div className="contact__container">
        <div className="contact__intro">
          <span className="section-eyebrow">
            LET'S BUILD SOMETHING BETTER
          </span>

          <h2 className="section-heading">
            Your next big idea
            <span className="gradient-text"> starts here.</span>
          </h2>

          <p className="section-description">
            Tell us what you are trying to achieve. Let's explore
            the right technology and strategy for your business.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-icon" aria-hidden="true">
                ↗
              </span>

              <div>
                <span className="contact__detail-label">
                  THE APPROACH
                </span>
                <p>Understand the challenge. Plan the solution.</p>
              </div>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-icon" aria-hidden="true">
                ◈
              </span>

              <div>
                <span className="contact__detail-label">
                  THE PRIORITY
                </span>
                <p>Practical technology with business value.</p>
              </div>
            </div>
          </div>

          <div className="contact__availability">
            <span className="contact__status-dot" />
            <span>Ready to discuss your next project</span>
          </div>
        </div>

        <div className="contact__form-card">
          <div className="contact__form-heading">
            <span className="section-eyebrow">PROJECT ENQUIRY</span>
            <h3>Tell us about your project</h3>
            <p>Fields marked with * are required.</p>
          </div>

          {submitted && (
            <div className="contact__success" role="status" aria-live="polite">
              <span aria-hidden="true">✓</span>
              <div>
                <strong>Form validated successfully!</strong>
                <p>
                  This is a front-end demo. Connect a backend or email
                  service to deliver your enquiry.
                </p>
              </div>
            </div>
          )}

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field-grid">
              <div className="contact__field">
                <label htmlFor="contact-name">Full name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && (
                  <span className="contact__error" id="contact-name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">Email address *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && (
                  <span className="contact__error" id="contact-email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  placeholder="Your company (optional)"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-service">Service required *</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={
                    errors.service ? "contact-service-error" : undefined
                  }
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span className="contact__error" id="contact-service-error">
                    {errors.service}
                  </span>
                )}
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Project details *</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Describe your goals, challenge, or project idea..."
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
              />
              <div className="contact__field-footer">
                {errors.message ? (
                  <span className="contact__error" id="contact-message-error">
                    {errors.message}
                  </span>
                ) : (
                  <span>Minimum 10 characters</span>
                )}

                <span>{formData.message.length} characters</span>
              </div>
            </div>

            <button className="contact__submit" type="submit">
              Validate enquiry
              <span aria-hidden="true"> ↗</span>
            </button>

            <p className="contact__privacy-note">
              Your information stays in this browser demo and is not
              transmitted to a server.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
