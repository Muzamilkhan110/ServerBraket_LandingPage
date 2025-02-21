'use client'
import React, { useEffect, useState, useRef } from "react";
import Pricing from "@/components/Picing/Pricing";
import { CheckCircle } from "lucide-react";
import Button from "@/components/Button/Button";

const data = [
  {
    id: 1,
    title: "Starter Plan",
    price: "$10/month",
    description: "Perfect for individuals who need basic server management tools.",
    features: ["Single Server Management", "Basic Monitoring", "Standard Security", "Limited Bandwidth"],
  },
  {
    id: 2,
    title: "Business Plan",
    price: "$30/month",
    description: "Ideal for small businesses with multiple servers and better security.",
    features: ["Multi-Server Management", "Advanced Monitoring", "Enhanced Security", "Priority Support"],
  },
  {
    id: 3,
    title: "Enterprise Plan",
    price: "$50/month",
    description: "Best for large-scale enterprises with high-traffic servers.",
    features: ["Unlimited Servers", "24/7 Live Monitoring", "Premium Security", "Customizable Infrastructure"],
  },
];

const PricingCard = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-custom m-auto py-12 font-grotesk">
      <div className="rounded-lg py-8">
        <h2 className={`text-3xl font-bold text-center mb-8 transition-all duration-700 ease-in-out ${
            visibleCards.length > 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>Choose Your Plan</h2>
        <div className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {data.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative border overflow-hidden rounded-lg shadow-xl shadow-sky-900 bg-white p-6 transition-all duration-700 ease-in-out transform 
                  ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                  ${
                    hoveredIndex === index
                      ? "scale-110 translate-y-[-10px] z-10 shadow-2xl"
                      : hoveredIndex !== null && index < hoveredIndex
                      ? "translate-x-[-10px] scale-95"
                      : hoveredIndex !== null && index > hoveredIndex
                      ? "translate-x-[10px] scale-95"
                      : "scale-100 bg-white"
                  }
                `}
              >
                <h3 className={`text-lg font-semibold transition-all duration-700 ease-in-out ${
                    visibleCards.includes(index) ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-10"
                  }`}>{item.title}</h3>
                <Pricing  price={item.price} description={item.description} />

                {/* Features List with Check Mark */}
                <ul className="mt-4 space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center space-x-2 transition-all duration-700 ease-in-out ${
                        visibleCards.includes(index)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-5"
                      }`}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className={`gradient-bg text-white text-center py-2 mt-4 rounded-lg transition-all duration-700 ease-in-out ${
                    visibleCards.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}>
                  <Button text="Get Started" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
