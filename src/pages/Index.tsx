import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AgencyAppsSection from "@/components/landing/AgencyAppsSection";
import BlogSection from "@/components/landing/BlogSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FAQSection from "@/components/landing/FAQSection";
import FeedbackSection from "@/components/landing/FeedbackSection";
import Footer from "@/components/landing/Footer";
import ScrollFloaters from "@/components/landing/ScrollFloaters";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AgencyAppsSection />
      <BenefitsSection />
      <BlogSection />
      <FAQSection />
      <FeedbackSection />
      <Footer />
      <ScrollFloaters />
    </div>
  );
};

export default Index;
