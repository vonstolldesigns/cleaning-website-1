// components/PriceCard.tsx
import React from "react";

interface PriceCardProps {
  title: string;
  description1: string;
  description2: string;
  type: string;
  isPopular?: boolean;
  mainCard?: boolean;
  buttonText: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  description1,
  description2,
  type,
  isPopular,
  mainCard,
  buttonText,
}) => {
  return (
    <div
      className={`border py-8 px-12 rounded-3xl font-extralight text-sm text-center 
      flex-center flex-col gap-4 max-w-sm hover:scale-105  transition-all ease-in-out duration-500 ${
        mainCard ? "gradient_orange_down" : "bg-white"
      }`}
    >
      {isPopular && (
        <div
          className={`mb-6 px-12 py-3 text-xs font-light border
        rounded-full transition-all ease-in-out duration-300 
        ${
          mainCard
            ? "bg-white  text-orange border-white"
            : "bg-orange  text-white border-orange"
        }`}
        >
          Most Popular
        </div>
      )}
      <h2
        className={`text-3xl font-medium 
        ${mainCard ? "text-white" : "text-orange"}
        ${isPopular ? "" : "mt-[70px]"}
        `}
      >
        {title}
      </h2>
      <p className={`my-3 mx-2 ${mainCard ? "text-white" : "text-gray-900"}`}>
        {description1}
      </p>
      <p className={`my-1 mx-2 ${mainCard ? "text-white" : "text-gray-900"}`}>
        {description2}
      </p>
      <p className={`text-sm my-8 ${mainCard ? "text-white" : "text-orange"}`}>
        {type}
      </p>
      <button
        className={`hover:shadow-lg active:shadow-sm px-16 py-3 rounded-full transition-all ease-in-out duration-300 border
        hover:bg-transparent font-light w-full
        ${
          mainCard
            ? "hover:text-white bg-white  text-orange border-white"
            : "hover:text-orange bg-orange  text-white border-orange"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PriceCard;
