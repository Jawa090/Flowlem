import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Layers, UserCircle, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "SDRs guessing, not qualifying",
    description: "SDRs often guess which leads are ready to buy, wasting time and missing connections.",
    stat: "67%",
    statLabel: "of SDR time wasted",
  },
  {
    icon: Layers,
    title: "Tools that add noise, not meetings",
    description: "Data everywhere, but no consistent stream of demos.",
    stat: "12+",
    statLabel: "tools in avg. stack",
  },
  {
    icon: UserCircle,
    title: "Founders back in the SDR seat",
    description: "Every quarter, leadership jumps back into prospecting when pipeline dips.",
    stat: "40%",
    statLabel: "of founder time",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-8 lg:py-12 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-danger-muted border border-danger-border text-danger text-sm font-medium mb-6"
          >
            <AlertTriangle className="w-4 h-4" />
            The Problem
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-balance"
          >
            You Don't Need More Tools.{" "}
            <span className="gradient-text">You Need More SaaS Demos.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            If you run a B2B agency selling to SaaS and startups, you've already tried the usual playbook: founders doing outbound between calls, junior SDRs burning lists, or yet another "AI SDR" tool your team never fully adopts. You still end up with a lumpy pipeline, random leads, and a calendar full of "curious" demos that never go anywhere.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="premium-card group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="icon-container group-hover:shadow-glow transition-shadow duration-500">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{problem.stat}</div>
                  <div className="text-xs text-muted-foreground">{problem.statLabel}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-electric transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
