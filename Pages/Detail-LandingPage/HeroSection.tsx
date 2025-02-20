"use client";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Image from "next/image";

const Indexe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Page load hone ke baad animation start hoga
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 200); // Delay animation start

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
      className={`container-custom m-auto transition-all duration-700 ease-in-out ${
        isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <section className="rounded-lg gradient-bg flex items-center justify-center text-white pt-10 relative z-50">
        <div className="text-center px-3">
          <div>
            <h1 className="text-xl font-bold py-5">
              One Tool For Doing it All Together
            </h1>
            <p className="py-6 text-xs md:text-base opacity-80">
              Plan, track, and optimize your projects with ease.Plan, track, and
              optimize your projects with ease.Plan, track, and optimize your
              projects with ease.
            </p>
          </div>
          <div className="flex justify-center gap-3 py-5">
            <Button
              text="Get Started"
              className="mt-6 bg-white text-xs text-black py-2 px-4 rounded-lg hover:bg-opacity-80 transition"
            />
            <Button
              text="How it works"
              className="mt-6 bg-sky-950 text-xs text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition"
            />
          </div>
          {/* 🖼 Image - Initially Hidden, Scroll Pe Full Dikhne Lage */}
          <div className="flex justify-center mt-8 relative overflow-hidden h-40 md:h-64">
            <Image
              className={`rounded-xl transition-all duration-700 !w-[90%] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1/2 opacity-50"
              }`}
              src={"/herosection.jpg"}
              alt="image"
              width={400}
              height={250}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Indexe;
