"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); 
  }, []);

  return (
    <footer
      className={`container-custom gradient-bg rounded-xl text-white py-10 mt-16 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
        
      <div className="container-custom m-auto px-6 flex flex-col md:flex-row justify-between items-start">
        
        {/* Right Side - Quick Links */}
        <div
          className={`mt-6 md:mt-0 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white">
            <li><Link href="#home" className="hover:text-white">Home</Link></li>
            <li><Link href="#features" className="hover:text-white">Features</Link></li>
            <li><Link href="#solution-section" className="hover:text-white">Solutions</Link></li>
            <li><Link href="#supported-technologies" className="hover:text-white">Technologies</Link></li>
            <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        {/* Left Side - Logo & Description */}
        <div
          className={`max-w-md transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <Image src="/Logo.png" alt="Logo" width={150} height={50} />
          <p className="mt-4 text-white text-sm">
            ServerBracket is a web-based hosting control panel that simplifies
            VPS and dedicated server management. It provides a user-friendly
            GUI to manage domains, databases, processes, firewalls, cron jobs,
            and files without requiring command-line knowledge.
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm px-6">
        {/* Social Links */}
        <div className="flex space-x-6 order-2 md:order-1 mt-4 md:mt-0">
          <Link href="#"><Facebook className="w-6 h-6 hover:text-white" /></Link>
          <Link href="#"><Twitter className="w-6 h-6 hover:text-white" /></Link>
          <Link href="#"><Linkedin className="w-6 h-6 hover:text-white" /></Link>
          <Link href="#"><Github className="w-6 h-6 hover:text-white" /></Link>
        </div>
        {/* Copyright */}
        <div className="order-1 md:order-2">
          &copy; {new Date().getFullYear()} ServerBracket. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
