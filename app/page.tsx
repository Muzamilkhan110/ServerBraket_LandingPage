'use client'
import Index from "@/Pages/Detail-LandingPage/HeroSection";
import CardsCall from "@/Pages/Detail-LandingPage/CardsCall";
import ProductCard from "@/Pages/Detail-LandingPage/ProductCard";
import PricingCard from "@/Pages/Detail-LandingPage/PricingCard";
import Indexe from "@/Pages/Detail-LandingPage/AboveFooter"
import SolutionSection from "@/Pages/Detail-LandingPage/SolutionSection";
import KeyFeatures from "@/Pages/Detail-LandingPage/KeyFeatures";
import SupportedTechnologies from "@/Pages/Detail-LandingPage/SupportedTechnologies";

export default function Home() {
  return (
    <div >
      <Index />
      <CardsCall />
      <SolutionSection />
      <KeyFeatures />
      <SupportedTechnologies />
      {/* <ProductCard /> */}
      <PricingCard />
      <Indexe />
    </div>
  );
}
