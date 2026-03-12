import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import GetStartedSection from "@/sections/GetStartedSection";
import DifferenceSection from "@/sections/DifferenceSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FAQSection from "@/sections/FAQSection";
import MarqueeSection from "@/sections/MarqueeSection";
import Footer from "@/sections/Footer";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GetStartedSection />
        <DifferenceSection />
        <TestimonialsSection />
        <FAQSection />
        <MarqueeSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
