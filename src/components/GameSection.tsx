import React from 'react';

interface GameCard {
  id: number;
  title: string;
  image: string;
}

interface SectionProps {
  title: string;
  IconComponent: React.ElementType;
  cards: GameCard[];
}

const GameSection: React.FC<SectionProps> = ({ title, IconComponent, cards }) => {
  return (
    <div className="flex flex-col gap-1 h-full">
      <div className="flex items-center gap-2">
        <IconComponent className="text-white text-lg" />
        <h2 className="text-white font-semibold text-lg">{title}</h2>
      </div>
      <div className="grid grid-cols-7 gap-1 h-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-cover bg-center bg-no-repeat rounded-md p-2 text-white h-full"
            style={{ backgroundImage: `url('${card.image}')` }}
          >
            {card.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSection;
