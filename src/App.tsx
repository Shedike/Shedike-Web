import React, { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { ServicesGrid } from "./components/ServicesGrid";
import { SoftwareShowcase } from "./components/SoftwareShowcase";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { PricingSection } from "./components/PricingSection";
import { IntegrationsSection } from "./components/IntegrationsSection";
import { AboutSection } from "./components/AboutSection";
import { ActiveRegionsMap } from "./components/ActiveRegionsMap";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { ServicesPage } from "./pages/ServicesPage";
import { GrowBusinessPage } from "./pages/GrowBusinessPage";

import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "services" | "business" | "contact"
  >("home");

  if (currentPage === "services") {
    return (
      <ServicesPage
        onNavigateHome={() => setCurrentPage("home")}
        onNavigateContact={() => setCurrentPage("contact")}
        onNavigateBusiness={() => setCurrentPage("business")}
      />
    );
  }

  if (currentPage === "business") {
    return (
      <GrowBusinessPage
        onNavigateHome={() => setCurrentPage("home")}
        onNavigateContact={() => setCurrentPage("contact")}
        onNavigateServices={() => setCurrentPage("services")}
      />
    );
  }

  if (currentPage === "contact") {
    return (
      <ContactPage
        onNavigateHome={() => setCurrentPage("home")}
        onNavigateServices={() => setCurrentPage("services")}
        onNavigateBusiness={() => setCurrentPage("business")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        onNavigateServices={() => setCurrentPage("services")}
        onNavigateBusiness={() => setCurrentPage("business")}
        onNavigateContact={() => setCurrentPage("contact")}
      />
      <HowItWorks />
      <ServicesGrid onNavigateServices={() => setCurrentPage("services")} />
      <SoftwareShowcase />
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
