import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden section-mesh pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full blur-[100px] bg-electric/15" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] bg-electric/10" 
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
      </div>

      <div className="container-custom relative z-10 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <span className="eyebrow">
                <Sparkles className="w-3.5 h-3.5 mr-2" />
                B2B Agencies → SaaS & Startups
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold text-foreground text-balance"
            >
              Book More SaaS Demos on Autopilot{" "}
              <span className="gradient-text">with AI</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              We replace SDR guesswork for B2B agencies selling to SaaS companies—detecting in-market buyers, scoring prospects, and booking qualified demos on autopilot.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <div className="flex flex-col">
                <a 
                  href="/book-call"
                  className="btn-primary group"
                >
                  <span>Book a 15-Minute Pipeline Call</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="text-sm text-muted-foreground mt-3 text-center sm:text-left">
                  Get a realistic demo target and pipeline plan.
                </span>
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="pt-10 border-t border-border"
            >
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "500+", label: "Demos Booked" },
                  { value: "85%", label: "Show Rate" },
                  { value: "3.2x", label: "Pipeline ROI" },
                ].map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative -mt-16 lg:-mt-20"
          >
            {/* Main image container */}
            <div className="relative">
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-electric/10 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={heroImage}
                  alt="AI-powered lead generation pipeline visualization"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Glow effect behind image */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
                <div className="absolute inset-0 bg-electric rounded-3xl transform scale-90" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
