import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowUpRight } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { question: "How do I book an appointment?", answer: "Send us a message through the contact form or use the contact details on this website. Tell us which service you are interested in and your preferred day, and we will help you arrange a suitable time." },
  { question: "How should I prepare for my manicure?", answer: "Arrive with clean hands and let us know about any nail sensitivities or concerns before your appointment. If you currently have product on your nails, mention it when booking so we can allow enough time." },
  { question: "How long will my appointment take?", answer: "Timing depends on the treatment, your starting point and the design you choose. When you contact us, share the service you want and any inspiration images so we can give you a more useful time estimate." },
  { question: "Do you offer permanent makeup?", answer: "Yes, permanent makeup is one of our service categories. The right technique and expected results depend on the area and your individual needs, so we recommend discussing your goals and any relevant sensitivities before booking." },
  { question: "Can beginners join your training courses?", answer: "Our training and education services are designed for people at different stages. Contact us with your current experience and learning goals so we can help you identify the most suitable course." },
  { question: "What if I need to change my appointment?", answer: "Please contact us as soon as possible if your plans change. We will do our best to find another suitable time. Any specific cancellation or rescheduling terms can be confirmed when your appointment is arranged." },
];

export default function FAQSection({ compact = false }) {
  const [openIndex, setOpenIndex] = useState(0);
  const id = useId();
  const reduceMotion = useReducedMotion();
  const items = compact ? faqs.slice(0, 4) : faqs;

  return (
    <section className="faq-section py-16 sm:py-20 lg:py-28" aria-labelledby={`${id}-title`}>
      <div className="wrapper">
        <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">A little clarity</p>
          <h2 id={`${id}-title`} className="mb-5">Frequently asked questions</h2>
          <p className="text-base text-stone-600 sm:text-lg">Everything you need to feel comfortable before your visit. If you still have a question, we would love to hear from you.</p>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl divide-y divide-stone-200 border-y border-stone-200">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `${id}-answer-${index}`;
            return (
              <ScrollReveal key={item.question} delay={index * 0.035} amount={0.05}>
                <article className="faq-item">
                  <h3 className="m-0 text-base sm:text-lg">
                    <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left font-medium transition-colors hover:text-rose-800 sm:py-6">
                      <span>{item.question}</span>
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-45 border-rose-300 bg-rose-50 text-rose-800" : "border-stone-300"}`}><FiPlus aria-hidden="true" /></span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div id={answerId} key="answer" initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduceMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeInOut" }} className="overflow-hidden">
                        <p className="max-w-2xl pb-6 pr-4 leading-7 text-stone-600 sm:pr-12">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal className="mt-8 text-center">
          <Link to="/contact" className="btn btn-outline inline-flex items-center justify-center gap-3">Still have a question? Contact us <FiArrowUpRight aria-hidden="true" /></Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
