import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const benefits = [
  "No long-term contracts",
  "ICP-qualified demos only",
  "Results in 30 days",
];

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-28 lg:py-36 section-mesh relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[150px] bg-electric/10"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-10 lg:p-16 rounded-[2.5rem] border border-border bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-electric/20 rounded-tl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-electric/20 rounded-br-[2.5rem]" />
            
            {/* Gradient glow */}
            <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full blur-3xl bg-electric/5" />
            
            <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/15 text-electric text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Ready to Scale?
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-6 text-balance"
              >
                Ready to Stop Guessing Where Your Next{" "}
                <span className="gradient-text">SaaS Clients</span> Come From?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
              >
                If you want AI-powered lead generation that speaks your buyers' language 
                and fills your calendar with real SaaS and startup demos—not just noise—
                Flowlem is built for you.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mb-10"
              >
                {benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    {benefit}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center gap-3"
              >
                <a 
                  href="/book-call"
                  className="btn-primary text-lg px-12 py-5 group"
                >
                  <span>Book a 15-Minute Pipeline Call</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-sm text-muted-foreground">
                  Get a realistic demo target and pipeline plan in 15 minutes
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
