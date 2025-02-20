import React from "react";
import Image from "next/image";

interface ProductCardsProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
  heading?: string;
  description?: string;
  animationActive?: boolean;
}

const ProductCards: React.FC<ProductCardsProps> = ({
  imageSrc,
  imageAlt,
  className = "",
  heading,
  description,
  animationActive = false,
}) => {
  return (
    <div className="rounded-md border shadow-lg p-3">
      {/* 🖼 Image Animation */}
      <div className={`transition-all duration-700 ease-in-out transform 
          ${animationActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
        <Image src={imageSrc} alt={imageAlt} className={className} width={50} height={10} />
      </div>

      {/* 🏷 Heading Animation */}
      <div className={`my-5 transition-all duration-700 ease-in-out transform 
          ${animationActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
        <h1 className="text-lg font-bold">{heading}</h1>
        <p className="text-neutral-800 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductCards;
