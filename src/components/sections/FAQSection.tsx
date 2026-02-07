import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you start delivering demos?",
    answer: "Most agencies see their first qualified demos within 30 days of launch. We guarantee results in the first month or you don't pay for month two."
  },
  {
    question: "What makes Flowlem different from other AI SDR tools?",
    answer: "We're not just software—we're a done-for-you service. Real humans qualify every lead, handle responses, and book only high-intent demos. Plus, we specialize exclusively in SaaS and startup buyers."
  },
  {
    question: "Do you require a long-term contract?",
    answer: "No. We work month-to-month because we're confident in our results. If we're not delivering value, you can cancel anytime."
  },
  {
    question: "How do you ensure lead quality?",
    answer: "Every prospect is pre-qualified against your exact ICP criteria, budget requirements, and decision-maker status. If a demo doesn't meet your standards, we replace it free and refine our targeting."
  },
  {
    question: "What if prospects don't show up?",
    answer: "We guarantee a minimum 75% show rate. Every no-show is replaced with a new qualified demo booking at no additional cost."
  },
  {
    question: "Can you work with our existing tech stack?",
    answer: "Yes. We integrate seamlessly with your CRM, calendar, and communication tools. No need to change your workflow."
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-balance"
          >
            Common Questions About{" "}
            <span className="gradient-text">Flowlem</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Everything you need to know about our AI-powered demo booking service
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              className="premium-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 text-left p-6"
              >
                <span className="text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-electric flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="/book-call" 
            className="inline-flex items-center text-electric hover:text-electric-hover font-semibold transition-colors duration-300"
          >
            Book a call and we'll answer them all
            <ChevronDown className="ml-2 w-4 h-4 rotate-[-90deg]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
