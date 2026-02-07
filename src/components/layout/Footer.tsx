import { Zap, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border/50 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
      
      <div className="container-custom py-16 relative">
        {/* Centered content */}
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <a href="/" className="inline-flex items-center gap-3 mb-6 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric to-electric-hover flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Flowlem</span>
          </a>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
            AI-powered lead generation that books SaaS demos for B2B agencies on autopilot.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 pb-8 border-b border-border/50">
            <a 
              href="mailto:hello@flowlem.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-electric transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>hello@flowlem.com</span>
            </a>
            <a 
              href="/book-call" 
              className="flex items-center gap-2 text-muted-foreground hover:text-electric transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Schedule a Call</span>
            </a>
          </div>

          {/* Privacy & Security Note */}
          <p className="text-sm text-muted-foreground/70 mb-4">
            Your data is secure. We never share prospect information with third parties.
          </p>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground/70">
            © 2026 Flowlem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
