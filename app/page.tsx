'use client'
import Index from "@/Pages/Detail-LandingPage/HeroSection";
import CardsCall from "@/Pages/Detail-LandingPage/CardsCall";
import SolutionSection from "@/Pages/Detail-LandingPage/SolutionSection";
import KeyFeatures from "@/Pages/Detail-LandingPage/KeyFeatures";
import SupportedTechnologies from "@/Pages/Detail-LandingPage/SupportedTechnologies";
import FAQ from "@/Pages/Detail-LandingPage/FAQ";

export default function Home() {
  return (
    <div>
      <div id="home">
        <Index />
      </div>
      <div id="features">
        <CardsCall />
      </div>
      <div id="solution-section">
        <SolutionSection />
      </div>
      <div id="key-features">
        <KeyFeatures />
      </div>
      <div id="supported-technologies">
        <SupportedTechnologies />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
}

