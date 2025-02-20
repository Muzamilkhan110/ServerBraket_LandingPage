"use client";
import React, { useEffect, useState, useRef } from "react";
import ProductCards from "@/components/ProductivityCards/ProductCards";

const data = [
  {
    imageSrc: "/automation.png",
    imageAlt: "Image 1",
    heading: "Title 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
  },
  {
    imageSrc: "/enhance.png",
    imageAlt: "Image 2",
    heading: "Title 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
  },
  {
    imageSrc: "/operate.png",
    imageAlt: "Image 3",
    heading: "Title 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
  },
];

const ProductCard = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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
    <div className="container-custom m-auto py-8">
      <div className="rounded-md">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 md:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el
              }}
              className={`transition-all duration-700 ease-in-out transform 
                ${visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <ProductCards 
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                heading={item.heading}
                description={item.description}
                animationActive={visibleCards.includes(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
