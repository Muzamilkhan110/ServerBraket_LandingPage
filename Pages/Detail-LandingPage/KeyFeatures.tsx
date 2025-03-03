"use client";
import React, { useEffect, useState } from "react";
import { Server, CloudUpload, Shield, Activity, Database } from "lucide-react"; // Feature Icons

const featuresData = [
  {
    id: 1,
    Icon: Server,
    title: "Multi-Server Management",
    description: "Easily manage multiple servers from a single dashboard without complex configurations.",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    Icon: CloudUpload,
    title: "One-Click Deployments",
    description: "Deploy your applications instantly with our fast and hassle-free setup process.",
    iconColor: "text-green-500",
  },
  {
    id: 3,
    Icon: Database,
    title: "Automated Backups",
    description: "Keep your data safe with scheduled backups and easy recovery options.",
    iconColor: "text-yellow-500",
  },
  {
    id: 4,
    Icon: Activity,
    title: "Live Resource Monitoring",
    description: "Track real-time CPU, RAM, and bandwidth usage with detailed analytics.",
    iconColor: "text-purple-500",
  },
  {
    id: 5,
    Icon: Shield,
    title: "Advanced Security",
    description: "Protect your servers with built-in DDoS protection, firewall rules, and SSH key management.",
    iconColor: "text-red-500",
  },
];

const KeyFeatures = () => {
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
      className={`py-16 font-grotesk container-custom rounded-xl   transition-all duration-700 ease-in-out ${
        isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Key Features of ServerBracket
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {featuresData.map(({ id, Icon, title, description, iconColor }, index) => (
            <div
              key={id}
              className={`bg-white p-6 rounded-lg s shadow-sm shadow-sky-800 text-center text-gray-900 transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-gray-600 mt-2 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
