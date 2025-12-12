import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import BestPracticesSection from "@/components/landing/BestPracticesSection";
import FeedbackSection from "@/components/landing/FeedbackSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <BenefitsSection />
      <BestPracticesSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Index;
