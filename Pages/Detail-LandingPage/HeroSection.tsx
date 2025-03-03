"use client";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Image from "next/image";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 200); // Page load animation delay

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
    <div
      className={`container-custom m-auto transition-all duration-700 ease-in-out font-grotesk ${
        isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <section className="rounded-lg gradient-bg flex flex-col items-center text-white py-16 lg:py-24 font-grotesk">
        <div className="text-center px-4 max-w-2xl font-grotesk">
          <h1 className="text-3xl md:text-5xl font-bold py-5 font-grotesk">
            ServerBracket - The Ultimate Web Hosting Panel
          </h1>
          <p className="py-6 text-sm md:text-lg opacity-80 font-grotesk">
            Forget complex CLI commands! Manage your web hosting effortlessly
            with an intuitive, powerful, and secure dashboard.
          </p>
          <div className="flex justify-center gap-4 py-5 font-grotesk">
            <Button
              text="Get Started"
              className="mt-6 bg-white text-xs md:text-base text-black py-3 px-6 rounded-lg font-semibold hover:bg-opacity-80 transition font-grotesk"
            />
            <Button
              text="How It Works"
              className="mt-6 bg-sky-950 text-xs md:text-base text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-80 transition font-grotesk"
            />
          </div>
        </div>
        <div className="flex justify-center mt-12 md:mt-16 w-[75%] font-grotesk">
          <Image
            className={`rounded-xl shadow-lg transition-all duration-700 w-full ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-1/2 opacity-50 scale-95"
            } hover:scale-105 hover:-translate-y-2 font-grotesk`}
            src="/dashboard.png"
            alt="ServerBracket Dashboard"
            width={800}
            height={450}
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
