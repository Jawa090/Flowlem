import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Brain, Zap, Users, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "AI Identifies In-Market SaaS Companies",
    description: "Our AI targets in-market SaaS firms by tracking funding, hiring, tech stacks and founder activity.",
    features: ["Funding round detection", "Hiring surge analysis", "Tech stack monitoring", "Growth indicators"],
  },
  {
    number: "02",
    icon: Brain,
    title: "Personalized Outreach at Scale",
    description: "We spark conversations through email, LinkedIn, Slack communities, founder content and even physical gifts at just the right moment.",
    features: ["Company-specific messaging", "Voice matching", "Pain point targeting", "Multi-variant testing"],
  },
  {
    number: "03",
    icon: Zap,
    title: "Smart Multi-Channel Sequences",
    description: "Our AI picks the best channel and timing so prospects engage without feeling spammed.",
    features: ["Email + LinkedIn automation", "Engagement scoring", "Smart timing", "Priority ranking"],
  },
  {
    number: "04",
    icon: Users,
    title: "Qualified Demos Delivered",
    description: "We handle booking and send qualified demos directly to your closers.",
    features: ["Human qualification", "Budget verification", "Decision-maker confirmation", "Calendar integration"],
  },
];

const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="method" ref={ref} className="py-12 lg:py-16 bg-background relative overflow-hidden">
      {/* Clean background elements */}
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-[100px] bg-electric/5 pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Our Process
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-balance"
          >
            The Flowlem AI{" "}
            <span className="gradient-text">Pipeline Blueprint</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Flowlem is AI-powered lead generation built for agencies that sell to SaaS and startups—not another generic "AI SDR" widget.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="premium-card group hover:shadow-xl transition-all duration-500"
            >
              {/* Step Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center group-hover:bg-electric/20 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-electric" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-electric text-white text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-electric transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Step Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {step.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Pipeline?
            </h4>
            <p className="text-muted-foreground mb-8">
              Get a custom pipeline blueprint tailored to your agency's SaaS targets and see exactly how many qualified demos we can deliver.
            </p>
            <a href="#contact" className="btn-primary group">
              <span>Book Your Strategy Call</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
