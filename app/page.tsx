'use client'
import Index from "@/Pages/Detail-LandingPage/HeroSection";
import CardsCall from "@/Pages/Detail-LandingPage/CardsCall";

import PricingCard from "@/Pages/Detail-LandingPage/PricingCard";
import Indexe from "@/Pages/Detail-LandingPage/AboveFooter"
import SolutionSection from "@/Pages/Detail-LandingPage/SolutionSection";
import KeyFeatures from "@/Pages/Detail-LandingPage/KeyFeatures";
import SupportedTechnologies from "@/Pages/Detail-LandingPage/SupportedTechnologies";
import FAQ from "@/Pages/Detail-LandingPage/FAQ";

export default function Home() {
  return (
    <div >
      <Index />
      <CardsCall />
      <SolutionSection />
      <KeyFeatures />
      <SupportedTechnologies />
      <PricingCard />
      <FAQ />
      <Indexe />
    </div>
  );
}
