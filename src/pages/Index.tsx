import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import MethodSection from "@/components/sections/MethodSection";
import DeliverablesSection from "@/components/sections/DeliverablesSection";
import GuaranteesSection from "@/components/sections/GuaranteesSection";
import QualificationSection from "@/components/sections/QualificationSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SocialProofSection />
        <MethodSection />
        <DeliverablesSection />
        <GuaranteesSection />
        <QualificationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
