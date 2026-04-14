import AboutSection from "@/components/Home/AboutSection";
import CTASection from "@/components/Home/CTASection";
import HeroSection from "@/components/Home/HeroSection";
import LaunchCampaign from "@/components/Home/LaunchCampaign";
import OurClients from "@/components/Home/OurClients";
import ToolsSection from "@/components/Home/ToolSection";
import ServicesSection from "@/components/Home/ServicesSection";
export default function Home() {
  return (
    <>
     
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LaunchCampaign />
      <OurClients />
      <ToolsSection/>
      <CTASection />
      
    </>
  );
}
