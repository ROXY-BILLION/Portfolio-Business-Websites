import "./Contact.css";

function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="contact__panel">
                <p className="eyebrow">HAVE AN IDEA?</p>

                <h2>
                    Let's build something
                    <span> great together.</span>
                </h2>

                <p>
                    Have a project, collaboration, or opportunity in mind?
                    I'd love to hear from you.
                </p>

                <a
                    href="mailto:hello@example.com"
                    className="button button--primary"
                >
                    Let's Talk <span>↗</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;