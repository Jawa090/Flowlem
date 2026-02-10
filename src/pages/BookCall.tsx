import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Zap } from "lucide-react";

// Declare Calendly type for TypeScript
declare global {
  interface Window {
    Calendly: any;
  }
}

const BookCall = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-electric/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-electric-hover flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow duration-300">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Flowlem</span>
            </a>
            <a 
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-6"
            >
              <Calendar className="w-4 h-4" />
              Book Your Pipeline Call
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Let's Discuss Your{" "}
              <span className="gradient-text">SaaS Pipeline</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Get a custom pipeline strategy and see exactly how we can help you book more qualified SaaS demos.
            </motion.p>
          </div>

          {/* Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border shadow-2xl overflow-hidden"
          >
            {/* Calendly Widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/flowlem?hide_gdpr_banner=1&primary_color=0ea5e9"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default BookCall;