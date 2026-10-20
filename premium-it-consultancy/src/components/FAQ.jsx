import { useState } from "react";
import "./FAQ.css";

const questions = [
  {
    question: "What services does Nexora Technologies provide?",
    answer:
      "We provide software development, cloud solutions, cybersecurity guidance, AI and automation, IT consulting, and digital transformation services.",
  },
  {
    question: "How does your consulting process work?",
    answer:
      "We begin by understanding your goals and current challenges. From there, we recommend a practical strategy, define the scope, and work with you through implementation and improvement.",
  },
  {
    question: "Can you work with an existing business system?",
    answer:
      "Yes. We can assess existing systems, identify improvement opportunities, and help with integrations, modernization, security, and performance.",
  },
  {
    question: "Do you support small businesses and startups?",
    answer:
      "Yes. Solutions can be scoped around your business priorities, available resources, and growth plans rather than using a one-size-fits-all approach.",
  },
  {
    question: "How do I request a consultation?",
    answer:
      "Use the contact form below to describe your business, the service you need, and the challenge you want to solve. Our contact form currently demonstrates the front-end experience only.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  function toggleQuestion(index) {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  }

  return (
    <section className="faq section-padding" id="faq">
      <div className="faq__container">
        <div className="faq__intro">
          <span className="section-eyebrow">
            QUESTIONS, ANSWERED
          </span>

          <h2 className="section-heading">
            Clarity before
            <span className="gradient-text"> the next step.</span>
          </h2>

          <p className="section-description">
            Find answers to common questions about our services,
            approach, and how to start working with Nexora.
          </p>

          <a className="faq__contact-link" href="#contact">
            Still have questions? Contact us
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>

        <div className="faq__list">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
                key={item.question}
              >
                <h3 className="faq__question-heading">
                  <button
                    className="faq__question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="faq__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq__question-text">
                      {item.question}
                    </span>

                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    className="faq__answer"
                    id={answerId}
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
