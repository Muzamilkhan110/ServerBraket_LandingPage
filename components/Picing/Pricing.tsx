import React from "react";

interface PricingProps {
  title?: string;
  price?: string;
  description?: string;
  features?: string[];
}

const Pricing: React.FC<PricingProps> = ({
  title,
  price,
  description,
  features,
}) => {
  return (
    <div>
      <div>
        <h2 className="text-base font-bold">{title}</h2>
        <h2 className="text-2xl font-bold">{price} <span className="text-sm font-light">/month</span></h2>
        <p className="text-sm py-2">{description}</p>
        <hr className="mt-3" />
        <div className="">{features}</div>
      </div>
    </div>
  );
};

export default Pricing;
