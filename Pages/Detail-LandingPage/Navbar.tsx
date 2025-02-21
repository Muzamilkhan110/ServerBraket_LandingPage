"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const sections = ["home", "features", "solution-section", "supported-technologies", "faq", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (id: string) => {
    requestAnimationFrame(() => {
      const section = document.getElementById(id.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id.toLowerCase());
        setIsOpen(false); // Close sidebar after clicking a section
      }
    });
  };

  return (
    <nav className="container-custom m-auto">
      <div className="bg-white shadow-lg flex justify-between items-center px-5 rounded-lg my-2 p-4 relative">
        {/* Logo */}
        <Image src="/Logo.png" alt="Logo" width={100} height={50} />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 text-gray-700 font-medium">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section)}
              className={`relative py-2 px-4 hover:text-sky-900 transition-all duration-300 ${
                activeSection === section.toLowerCase() ? "text-sky-900" : ""
              }`}
            >
              {section.replace("-", " ").charAt(0).toUpperCase() + section.replace("-", " ").slice(1)}
              {activeSection === section.toLowerCase() && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-sky-900"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Side Navbar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section)}
              className="block w-full text-left py-2 px-4 hover:bg-gray-200 rounded-md"
            >
              {section.replace("-", " ").charAt(0).toUpperCase() + section.replace("-", " ").slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
