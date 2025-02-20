import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardsProps {
  imageSrc: string | StaticImport;
  imageAlt: string;
  title?: string;
  description?: string;
  className?: string;
}
const Cards: React.FC<CardsProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  className = "",
}) => {
  return <div className="shadow-lg ">
        <div className="bg-slate-100 rounded-xl p-4 ">
        <Image src={imageSrc} alt={imageAlt} className={` bg-white rounded-xl ${className}`} width={300} height={10}/>
        <div className="pt-3">
            <h2 className="text-lg font-bold my-3">{title}</h2>
            <p className="text-sm text-neutral-700">{description}</p>
        </div>
    </div>
  </div>
};

export default Cards;
