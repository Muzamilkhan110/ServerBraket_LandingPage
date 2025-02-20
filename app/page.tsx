import Image from "next/image";
import Index from "@/Pages/Detail-LandingPage/HeroSection";
import CardsCall from "@/Pages/Detail-LandingPage/CardsCall";
import ProductCard from "@/Pages/Detail-LandingPage/ProductCard";

export default function Home() {
  return (
    <div >
      <Index />
      <CardsCall />
      <ProductCard />
    </div>
  );
}
