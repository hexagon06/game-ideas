import React from 'react';
import { GameCard, StateValues } from './game-card';

interface GameCardProps {
  card: GameCard;
}

const GameCardDisplay: React.FC<GameCardProps> = ({ card }) => {
  return (
    <div className="game-card border border-orange-700 p-3">
      <div className="game-card__content">
        <h2 className="game-card__title font-extrabold text-2xl">
          {card.title}
        </h2>
        <img
          src={card.image}
          alt={card.imageAlt}
          className="game-card__image"
        />
        <p className="game-card__description">{card.description}</p>
        <StateValuesDisplay values={card.stateCost} label="Cost" />
        <StateValuesDisplay values={card.stateEffect} label="Effect" />
        <StateValuesDisplay
          values={card.stateUpdateEffect}
          label="Update Effect"
        />
      </div>
    </div>
  );
};

const StateValuesDisplay: React.FC<{
  values: Partial<StateValues>;
  label: string;
}> = ({ values, label }) => {
  return (
    <div>
      <h3>{label}</h3>
      <ul>
        {Object.entries(values).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameCardDisplay;
