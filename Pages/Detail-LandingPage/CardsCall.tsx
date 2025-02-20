"use client";
import Cards from "@/components/Cards/Cards";
import React, { useEffect, useState, useRef } from "react";

const data = [
  {
    imageSrc: "/feature_b1.png",
    imageAlt: "Image 1",
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
  },
  {
    imageSrc: "/feature_b1.png",
    imageAlt: "Image 2",
    title: "Title 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
  },
  {
    imageSrc: "/feature_b1.png",
    imageAlt: "Image 3",
    title: "Title 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
  },
  {
    imageSrc: "/feature_b1.png",
    imageAlt: "Image 4",
    title: "Title 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.",
  },
];

const CardsCall = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
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
    <div className="container-custom m-auto flex justify-center">
      <div className="mt-8 flex ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className={`rounded-xl transition-all duration-700 ease-in-out transform ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Cards
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsCall;
