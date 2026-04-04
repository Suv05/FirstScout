import AboutSection from "@/components/Home/AboutSection";
import CTASection from "@/components/Home/CTASection";
import HeroSection from "@/components/Home/HeroSection";
import LaunchCampaign from "@/components/Home/LaunchCampaign";
import OurClients from "@/components/Home/OurClients";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <LaunchCampaign />
      <OurClients />
      <CTASection />
      <Footer />
    </>
  );
}
