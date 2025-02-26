"use client";
import Cards from "@/components/Cards/Cards";
import React, { useEffect, useState, useRef } from "react";

const data = [
  {
    imageSrc: "/feature_b1.png",
    imageAlt: "CLI Complexity",
    title: "CLI is Complex",
    description: "Memorizing commands and managing servers via CLI is hard for beginners and even experts.",
  },
  {
    imageSrc: "/feature_b2.png",
    imageAlt: "High Risk",
    title: "Risk of Errors",
    description: "A single wrong command can crash the entire server, causing downtime and data loss.",
  },
  {
    imageSrc: "/feature_b3.png",
    imageAlt: "No UI Monitoring",
    title: "No Monitoring UI",
    description: "There’s no visual dashboard for tracking server stats, logs, or resource usage in real-time.",
  },
  {
    imageSrc: "/feature_b13.png",
    imageAlt: "Slow Workflow",
    title: "Time-Consuming",
    description: "Managing multiple servers via CLI is slow, requiring continuous manual work and expertise.",
  },
  {
    imageSrc: "/Group 83.png",
    imageAlt: "GUI Solution",
    title: "ServerBracket GUI",
    description: "Say goodbye to CLI! Use an intuitive UI for secure, easy, and efficient server management.",
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
    <div className="container-custom mx-auto py-16 font-grotesk">
      {/* 🏗 Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Traditional CLI is Not Enough?
        </h2>
        <p className="text-gray-600 text-base md:text-lg mt-2">
          ServerBracket solves all CLI-related problems with a modern web UI.
        </p>
      </div>

      {/* 📌 Cards Layout */}
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className={`rounded-xl transition-all duration-700 ease-in-out transform max-w-[320px] md:max-w-[280px] lg:max-w-[300px] bg-white shadow-sky-900  shadow-sm hover:shadow-xl text-center hover:-translate-y-2 ${
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
  );
};

export default CardsCall;
