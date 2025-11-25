import React, { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { ServicesGrid } from "./components/ServicesGrid";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { PricingSection } from "./components/PricingSection";
import { IntegrationsSection } from "./components/IntegrationsSection";
import { AboutSection } from "./components/AboutSection";
import { ActiveRegionsMap } from "./components/ActiveRegionsMap";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { ServicesPage } from "./pages/ServicesPage";
import { GrowBusinessPage } from "./pages/GrowBusinessPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "services" | "business"
  >("home");

  if (currentPage === "services") {
    return <ServicesPage onNavigateHome={() => setCurrentPage("home")} />;
  }

  if (currentPage === "business") {
    return <GrowBusinessPage onNavigateHome={() => setCurrentPage("home")} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        onNavigateServices={() => setCurrentPage("services")}
        onNavigateBusiness={() => setCurrentPage("business")}
      />
      <HowItWorks />
      <ServicesGrid onNavigateServices={() => setCurrentPage("services")} />
      <WhyChooseUs />
      <ActiveRegionsMap />
      <PricingSection />
      <IntegrationsSection />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
