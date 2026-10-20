import { useState } from 'react';
import './Contact.css';

const initialForm = { name: '', email: '', service: '', message: '' };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status) setStatus('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.service || !form.message.trim()) {
      setStatus('Please complete every field before submitting.');
      return;
    }

    setStatus(`Thanks, ${form.name.trim()}! Your demo enquiry has been recorded in this page.`);
    setForm(initialForm);
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__copy">
          <span className="section-label">Have a good one in mind?</span>
          <h2 className="section-title">Let's make <span className="text-gradient">something happen.</span></h2>
          <p className="section-description">Tell us what you're working towards. We'll start with a conversation, not a sales pitch.</p>
          <div className="contact__detail"><span>EMAIL US</span><a href="mailto:hello@orbitdemo.com">hello@orbitdemo.com ↗</a></div>
          <div className="contact__detail"><span>GOOD FIT FOR</span><p>Growing brands, ambitious teams, and big ideas.</p></div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__row">
            <label>Your name<input name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" autoComplete="name" /></label>
            <label>Email address<input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@company.com" autoComplete="email" /></label>
          </div>
          <label>What do you need help with?
            <select name="service" value={form.service} onChange={handleChange}>
              <option value="">Choose a service</option>
              <option value="Brand strategy">Brand strategy</option>
              <option value="Paid media">Paid media</option>
              <option value="Social content">Social content</option>
              <option value="SEO and content">SEO & content</option>
              <option value="Full-service marketing">Full-service marketing</option>
            </select>
          </label>
          <label>Tell us a little about the project
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="What are you trying to achieve?" />
          </label>
          <button className="button button-primary contact-form__submit" type="submit">Send your enquiry <span aria-hidden="true">↗</span></button>
          {status && <p className={`contact-form__status ${status.startsWith('Thanks') ? 'contact-form__status--success' : ''}`} role="status">{status}</p>}
          <p className="contact-form__note">Demo form only — submissions are not sent to a server.</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
