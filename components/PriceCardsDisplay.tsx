// components/PriceCardsDisplay.tsx
import React from "react";
import PriceCard from "./PriceCard";

interface PriceCardsDisplayProps {
  cardsData: Array<{
    title: string;
    description1: string;
    description2: string;
    type: string;
    isPopular?: boolean;
    mainCard?: boolean;
    buttonText: string;
  }>;
}

const PriceCardsDisplay: React.FC<PriceCardsDisplayProps> = ({ cardsData }) => {
  return (
    <div className="flex flex-row justify-center gap-8 my-12">
      {cardsData.map((card, index) => (
        <PriceCard
          key={index}
          title={card.title}
          description1={card.description1}
          description2={card.description2}
          type={card.type}
          isPopular={card.isPopular}
          buttonText={card.buttonText}
          mainCard={card.mainCard}
        />
      ))}
    </div>
  );
};

export default PriceCardsDisplay;
