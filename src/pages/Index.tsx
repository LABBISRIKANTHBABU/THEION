import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesOrbit from "@/components/ServicesOrbit";
import AboutTeaser from "@/components/AboutTeaser";
import ContactTeaser from "@/components/ContactTeaser";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesOrbit />
        <AboutTeaser />
        <ContactTeaser />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;