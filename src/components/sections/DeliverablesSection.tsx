import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, MessageSquare, Calendar, BarChart3, BookOpen, CheckCircle2, Sparkles } from "lucide-react";

const deliverables = [
  {
    icon: Target,
    title: "Custom ICP & Market Intelligence",
    description: "Detailed profile of your ideal SaaS customers with funding triggers, growth signals, and buying intent indicators specific to your niche.",
    features: ["Funding round tracking", "Growth signal detection", "Intent scoring", "Market timing analysis"],
    value: "Worth $5,000+",
  },
  {
    icon: Users,
    title: "Fresh Prospect Database Monthly",
    description: "Net-new decision-makers delivered every month with verified contact data, company intelligence, and readiness-to-buy scoring.",
    features: ["Decision-maker contacts", "Company intelligence", "Buying readiness scores", "Contact verification"],
    value: "Worth $3,000+",
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Outreach Campaigns",
    description: "Personalized email and LinkedIn sequences that reference specific company details, recent news, and relevant pain points.",
    features: ["Multi-channel sequences", "Personalization at scale", "A/B testing", "Response optimization"],
    value: "Worth $4,000+",
  },
  {
    icon: Calendar,
    title: "Qualified Demo Bookings",
    description: "Guaranteed number of qualified demos per month with pre-screened prospects who have budget, authority, and genuine interest.",
    features: ["Budget qualification", "Authority verification", "Interest validation", "Calendar integration"],
    value: "Priceless",
    highlight: true,
  },
  {
    icon: BarChart3,
    title: "Performance Analytics & Insights",
    description: "Weekly performance reports with actionable insights, optimization recommendations, and clear ROI tracking.",
    features: ["Weekly reporting", "ROI tracking", "Optimization insights", "Performance metrics"],
    value: "Worth $2,000+",
  },
  {
    icon: BookOpen,
    title: "90-Day Optimization Playbook",
    description: "Comprehensive strategy document with proven tactics, optimization guidelines, and scaling recommendations for your agency.",
    features: ["Strategy documentation", "Optimization tactics", "Scaling guidelines", "Best practices"],
    value: "Worth $3,000+",
  },
];

const DeliverablesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="deliverables" ref={ref} className="py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full blur-[80px] bg-electric/5 pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            What's Included
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-balance"
          >
            What You Actually Get{" "}
            <span className="gradient-text">with Flowlem</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Everything you need to transform your agency's pipeline with qualified SaaS demos—no hidden fees, no surprises.
          </motion.p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`premium-card group relative ${item.highlight ? 'ring-2 ring-electric/30 bg-electric/5' : ''}`}
            >
              {/* Highlight Badge - Shows on hover */}
              {item.highlight && (
                <div className="absolute -top-3 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white text-electric shadow-xl border border-electric/20">
                    CORE DELIVERABLE
                  </span>
                </div>
              )}
              
              {/* Icon & Value */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center group-hover:bg-electric/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-electric" />
                </div>
                <span className="text-xs font-medium text-electric bg-electric/10 px-2 py-1 rounded-md">
                  {item.value}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-electric transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>
              
              {/* Features List */}
              <div className="space-y-2">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
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
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-electric/5 border border-electric/20">
            <h4 className="text-xl font-bold text-foreground mb-3">
              Total Value: $17,000+ per month
            </h4>
            <p className="text-muted-foreground mb-6">
              Everything included in one transparent monthly fee—no setup costs, no hidden charges.
            </p>
            <a href="/book-call" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-electric text-white rounded-2xl hover:bg-electric-hover hover:text-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-white/20">
              See Pricing & Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
