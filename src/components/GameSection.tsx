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
    <div>
      <div className="flex items-center gap-2 mb-2">
        <IconComponent className="text-white text-lg" />
        <h2 className="text-white font-semibold text-lg">{title}</h2>
          </div>
      <div className="grid md:grid-cols-7 grid-cols-2 gap-1 md:h-[20vh]">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-cover bg-center bg-no-repeat rounded-md p-2 text-white h-[20vh]"
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
