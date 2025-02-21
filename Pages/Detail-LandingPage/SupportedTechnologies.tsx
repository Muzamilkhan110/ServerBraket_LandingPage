"use client";
import React, { useEffect, useState } from "react";
import { FaNodeJs, FaPython, FaPhp, FaReact, FaJava, FaDocker, FaDatabase, FaGitAlt } from "react-icons/fa"; // Icons for Technologies
import { SiMongodb, SiPostgresql, SiKubernetes, SiNginx, SiNextdotjs } from "react-icons/si";

const technologiesData = [
  { id: 1, Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { id: 2, Icon: FaPython, name: "Python", color: "text-blue-500" },
  { id: 3, Icon: FaPhp, name: "PHP", color: "text-purple-500" },
  { id: 4, Icon: FaJava, name: "Java", color: "text-red-500" },
  { id: 5, Icon: FaReact, name: "React.js", color: "text-blue-400" },
  { id: 6, Icon: SiNextdotjs, name: "Next.js", color: "text-black" },
  { id: 7, Icon: FaDatabase, name: "SQL & NoSQL", color: "text-gray-600" },
  { id: 8, Icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
  { id: 9, Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-600" },
  { id: 10, Icon: FaDocker, name: "Docker", color: "text-blue-500" },
  { id: 11, Icon: SiKubernetes, name: "Kubernetes", color: "text-blue-700" },
  { id: 12, Icon: SiNginx, name: "Nginx", color: "text-green-700" },
  { id: 13, Icon: FaGitAlt, name: "Git", color: "text-orange-500" },
];

const SupportedTechnologies = () => {
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
      className={`py-16 font-grotesk container-custom rounded-xl gradient-bg text-white transition-all duration-700 ease-in-out ${
        isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* 🌟 Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Supported Technologies
        </h2>

        {/* 📌 Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
          {technologiesData.map(({ id, Icon, name, color }) => (
            <div
              key={id}
              className={`bg-white p-6 rounded-lg shadow-lg shadow-black text-center text-gray-900 transform transition-all duration-700 hover:scale-110 hover:shadow-xl flex flex-col items-center justify-center ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Icon className={`w-12 h-12 ${color}`} />
              <h3 className="text-lg font-semibold mt-4">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedTechnologies;
