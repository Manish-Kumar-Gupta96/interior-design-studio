import { useState } from "react";
import { contactFaqs } from "../../data/contact";
import Reveal from "../common/Reveal";
import SectionLabel from "../common/SectionLabel";

function ContactFAQ() {

  const [active, setActive] =
    useState<number | null>(null);

  return (
    <section className="contact-faq section">

      <div className="container-studio">

        <div className="contact-faq-grid">

          <Reveal>
            <SectionLabel>
              Before We Begin
            </SectionLabel>
          </Reveal>

          <div className="faq-list">

            {contactFaqs.map(
              (faq, index) => {

                const isOpen =
                  active === index;

                return (
                  <Reveal
                    key={faq.question}
                    delay={index * 0.05}
                    className={
                      isOpen
                        ? "faq-item active"
                        : "faq-item"
                    }
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setActive(
                          isOpen
                            ? null
                            : index
                        )
                      }
                      aria-expanded={isOpen}
                    >

                      <span>
                        {faq.question}
                      </span>

                      <strong>
                        {isOpen ? "−" : "+"}
                      </strong>

                    </button>

                    <div className="faq-answer">

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  </Reveal>
                );
              }
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactFAQ;
