import React, { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
const FaqCom = () => {
  const [isShow, setShow] = useState(null);

  const toggle = (index) => {
    setShow((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        {faqs.map((faq, index) => {
          const { question, answer } = faq;
          return (
            <div key={index} className="faq-card">
              <div className="faq-header">
                <h3 className="faq-question">{question}</h3>
                <button className="faq-btn" onClick={() => toggle(index)}>
                  <span>
                    {isShow === index ? <BsCaretUpFill /> : <BsCaretDownFill />}
                  </span>
                </button>
              </div>
              {isShow === index && <p className="faq-answer">{answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqCom;
