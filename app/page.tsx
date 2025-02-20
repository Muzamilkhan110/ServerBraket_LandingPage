'use client'
import Index from "@/Pages/Detail-LandingPage/HeroSection";
import CardsCall from "@/Pages/Detail-LandingPage/CardsCall";
import ProductCard from "@/Pages/Detail-LandingPage/ProductCard";
import PricingCard from "@/Pages/Detail-LandingPage/PricingCard";

export default function Home() {
  return (
    <div >
      <Index />
      <CardsCall />
      <ProductCard />
      <PricingCard />
    </div>
  );
}
