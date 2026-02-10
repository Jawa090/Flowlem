import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, TrendingUp, Users, Award } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "GrowthLab Agency",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    quote: "Flowlem delivered 18 qualified SaaS demos in our first month. Our close rate jumped from 12% to 34% because every lead was actually ready to buy.",
    results: "+180% close rate",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Sales",
    company: "Velocity Partners",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    quote: "We tried three 'AI SDR' tools before Flowlem. The difference? Real humans qualifying leads, not just bots spamming prospects. Game changer.",
    results: "3x pipeline growth",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "Co-Founder",
    company: "Scale Studio",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
    quote: "Finally stopped wasting founder time on cold outreach. Flowlem books 12-15 demos monthly while we focus on closing deals and serving clients.",
    results: "15+ demos/month",
    rating: 5,
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Agencies Served" },
  { icon: TrendingUp, value: "500+", label: "Demos Booked" },
  { icon: Award, value: "85%", label: "Avg Show Rate" },
];

const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-muted/30 relative overflow-hidden">
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
            <Award className="w-4 h-4" />
            Trusted by Agencies
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-balance"
          >
            Real Results from{" "}
            <span className="gradient-text">Real Agencies</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            See how B2B agencies are filling their pipelines with qualified SaaS demos
          </motion.p>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-electric" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="premium-card group relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-electric" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-electric text-electric" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Results Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric/10 text-electric text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                {testimonial.results}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-muted"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
