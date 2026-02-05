import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Clock, TrendingUp, CheckCircle2, BadgeCheck } from "lucide-react";

const guarantees = [
  {
    icon: Target,
    title: "Quality Guarantee",
    description: "Every demo we book must match your exact ICP criteria and budget requirements. If it doesn't fit, we replace it at no cost—and we'll refine our targeting to prevent future mismatches.",
    features: ["ICP-matched prospects only", "Budget pre-qualification", "Free replacements", "Continuous optimization"],
    badge: "100% Quality",
  },
  {
    icon: Shield,
    title: "Show-Up Guarantee", 
    description: "No-shows happen, but they shouldn't cost you opportunities. We replace every no-show with a new qualified demo booking, ensuring your calendar stays full of real prospects.",
    features: ["No-show replacements", "Calendar protection", "Prospect confirmation", "Backup scheduling"],
    badge: "Risk-Free",
  },
  {
    icon: Clock,
    title: "30-Day Launch Guarantee",
    description: "If we don't deliver your first batch of qualified demos within 30 days of launch, you don't pay for month two. We're confident in our process, and we back it with our guarantee.",
    features: ["30-day timeline", "Money-back promise", "Fast implementation", "Proven methodology"],
    badge: "Results-Based",
  },
  {
    icon: TrendingUp,
    title: "Performance Guarantee",
    description: "We don't just book meetings—we book meetings that convert. If your show rate drops below 75% or lead quality declines, we immediately adjust our approach at no additional cost.",
    features: ["75% minimum show rate", "Quality monitoring", "Performance tracking", "Free optimization"],
    badge: "Performance-Driven",
  },
];

const GuaranteesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="guarantees" ref={ref} className="py-20 lg:py-28 section-dark relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] bg-electric"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.08, scale: 1 } : {}}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[80px] bg-electric"
        />
        <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/90 text-sm font-medium mb-6"
          >
            <BadgeCheck className="w-4 h-4" />
            Risk-Free Partnership
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white mb-8 text-balance"
          >
            We Put Skin in the Game
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto"
          >
            Outbound shouldn't feel like lighting budget on fire and hoping for the best. Flowlem shares the risk with ironclad guarantees that protect your investment.
          </motion.p>
        </div>

        {/* Guarantees List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative p-8 rounded-2xl hover:bg-white/[0.05] transition-all duration-500 border-l-4 border-electric/30 hover:border-electric"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-electric/15 border border-electric/20 text-electric transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-lg flex-shrink-0">
                  <guarantee.icon className="w-7 h-7" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-electric-glow transition-colors duration-300">
                      {guarantee.title}
                    </h3>
                    {/* Badge - Shows on hover */}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-electric text-white">
                      {guarantee.badge}
                    </span>
                  </div>
                  
                  <p className="text-white/60 leading-relaxed mb-6 text-lg">
                    {guarantee.description}
                  </p>

                  {/* Features - Shows on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="grid md:grid-cols-2 gap-3">
                      {guarantee.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                          <span className="text-sm text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Partner Risk-Free?
            </h4>
            <p className="text-white/60 mb-6 leading-relaxed">
              Join agencies who've eliminated pipeline uncertainty with our proven, guaranteed approach to SaaS lead generation.
            </p>
            <a href="/book-call" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white text-electric rounded-2xl border-2 border-electric hover:bg-electric hover:text-white hover:border-electric hover:shadow-xl transition-all duration-300">
              Start Your Risk-Free Trial
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
