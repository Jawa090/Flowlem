import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, X, Target, Users, TrendingUp, AlertTriangle, Wrench, DollarSign } from "lucide-react";

const forItems = [
  {
    icon: Target,
    title: "B2B agencies already closing SaaS/startup clients",
    description: "You have proven success with SaaS companies and understand their buying process."
  },
  {
    icon: Users,
    title: "Teams with at least one closer who can handle 5–20 extra qualified demos per month",
    description: "You have the capacity to convert additional high-quality opportunities."
  },
  {
    icon: TrendingUp,
    title: "Agencies that care about pipeline and revenue, not just activity",
    description: "You measure success by closed deals and revenue growth, not just calls made."
  }
];

const notForItems = [
  {
    icon: AlertTriangle,
    title: "Agencies still figuring out their offer or with zero SaaS/startup wins",
    description: "You need to validate your service with SaaS clients before scaling outreach."
  },
  {
    icon: Wrench,
    title: "Teams just looking for a cheap data tool or SDR platform seat",
    description: "We're a done-for-you service, not a DIY tool or software license."
  },
  {
    icon: DollarSign,
    title: "Anyone insisting on doing everything manually",
    description: "Our AI-powered approach may not align with purely manual processes."
  }
];

const QualificationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[100px] bg-electric/5 pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-6"
          >
            <Target className="w-4 h-4" />
            Qualification
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-balance"
          >
            Is Flowlem a Fit for{" "}
            <span className="gradient-text">Your Agency?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We work best with established B2B agencies ready to scale their SaaS client acquisition with AI-powered precision.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FOR Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-green-50 border border-green-200 rounded-3xl p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-green-100 border border-green-200 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-900">Perfect For</h3>
                  <p className="text-green-700 text-sm">Agencies ready to scale</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {forItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-green-100 hover:bg-white/80 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm text-green-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* NOT FOR Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-red-50 border border-red-200 rounded-3xl p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-900">Not For</h3>
                  <p className="text-red-700 text-sm">Better to wait or look elsewhere</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {notForItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-red-100 hover:bg-white/80 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm text-red-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Sound like your agency?
            </h4>
            <p className="text-muted-foreground mb-8">
              If you checked most boxes in the "Perfect For" column, let's discuss how Flowlem can 10x your SaaS pipeline.
            </p>
            <a href="/book-call" className="btn-primary">
              Book Your Strategy Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualificationSection;