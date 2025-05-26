import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import TraditionsSection from "@/components/TraditionsSection";
import ArtsSection from "@/components/ArtsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <Navigation />
      <HeroSection />
      <HistorySection />
      <TraditionsSection />
      <ArtsSection />
      <Footer />
    </div>
  );
};

export default Index;
