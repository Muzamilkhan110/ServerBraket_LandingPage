"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Settings,
  ShieldCheck,
  BarChart,
  Rocket,
  Globe,
  Database,
} from "lucide-react"; // Icons for Features

const solutionData = [
  {
    id: 1,
    Icon: Settings,
    title: "Intuitive GUI Panel",
    description:
      "No more complex CLI commands! ServerBracket provides an easy-to-use, modern dashboard for seamless server management.",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    Icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Built-in security features ensure safe server operations, preventing accidental errors and risks.",
    iconColor: "text-green-500",
  },
  {
    id: 3,
    Icon: BarChart,
    title: "Live Monitoring",
    description:
      "Real-time tracking of server resources, logs, and performance analytics in a visually engaging way.",
    iconColor: "text-yellow-500",
  },
  {
    id: 4,
    Icon: Rocket,
    title: "Fast & Efficient",
    description:
      "Manage multiple servers effortlessly with optimized automation tools and a single-click interface.",
    iconColor: "text-purple-500",
  },
  {
    id: 5,
    Icon: Globe,
    title: "Hassle-Free Domains & SSL",
    description:
      "Seamless integration with domain providers and SSL setup to ensure website security.",
    iconColor: "text-orange-500",
  },
  {
    id: 6,
    Icon: Database,
    title: "Automated Backups",
    description:
      "Ensure your data is always safe with scheduled backups and easy recovery options.",
    iconColor: "text-teal-500",
  },
];

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 200);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`py-16 font-grotesk  container-custom rounded-xl gradient-bg text-white transition-all duration-700 ease-in-out ${
        isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          How ServerBracket Solves These Problems?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {solutionData.map(
            ({ id, Icon, title, description, iconColor }, index) => (
              <div
                key={id}
                className={`bg-white p-6 rounded-lg shadow-black shadow-sm text-center text-gray-900 transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div
                  className={`flex justify-center mb-4 transition-all duration-700 ${
                    isVisible
                      ? index % 2 === 0
                        ? "translate-x-0"
                        : "-translate-x-0"
                      : index % 2 === 0
                      ? "-translate-x-10"
                      : "translate-x-10"
                  }`}
                >
                  <Icon className={`w-12 h-12 ${iconColor}`} />
                </div>
                <h3
                  className={`text-lg font-semibold transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-gray-600 mt-2 transition-all duration-700 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                >
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
