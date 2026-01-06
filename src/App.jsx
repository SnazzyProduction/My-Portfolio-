import react from "react";

import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CtaSection from "./components/CtaSection";
import FooterSection from "./components/FooterSection";
import ContactSection from "./components/ContactSection";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* NavBar */}
      <NavBar />

      <main>
      {/* Hero / Navigation */}
      <HeroSection />
 
      {/* Features */}
      <FeaturesSection />
 
      {/* Call to Action */}
      <CtaSection />

    {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
      </main>
      
    </div>
  );
}