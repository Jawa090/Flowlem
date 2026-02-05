import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import MethodSection from "@/components/sections/MethodSection";
import DeliverablesSection from "@/components/sections/DeliverablesSection";
import GuaranteesSection from "@/components/sections/GuaranteesSection";
import QualificationSection from "@/components/sections/QualificationSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <MethodSection />
        <DeliverablesSection />
        <GuaranteesSection />
        <QualificationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
