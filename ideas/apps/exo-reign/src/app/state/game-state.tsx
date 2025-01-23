import React, { useEffect, useMemo, useState } from 'react';
import { useGameTime } from '../time/game-time-context';
import { useGamePower } from '../power/game-power';
import { useGameCards } from '../cards/game-cards-context';
import GameCardDisplay from '../cards/game-card-display';
import { defaultCards } from './default-test-cards';

const GameStateDisplay: React.FC = () => {
  const { time } = useGameTime();
  const { power, maxPower } = useGamePower();
  const {
    inPlay: cardsInPlay,
    hand,
    discarded,
    stack,
    initializeValues,
    handleNextTurn,
    handleStartOfTurn,
  } = useGameCards();

  const formattedTime = useMemo(() => {
    return `sss: ${time.years}`;
  }, [time]);

  const [passed, setPassed] = useState(0);

  useEffect(() => {
    handleNextTurn();
    const s = time.seasons;

    setPassed(passed + 1);
    handleStartOfTurn();
  }, [time]);

  useEffect(() => {
    initializeValues(defaultCards());
  }, []);

  return (
    <div>
      {formattedTime} / {passed}
      <div>
        {Array.from({ length: maxPower }, (_, index) => (
          <span key={index}>{index < power ? 'o' : 'x'}</span>
        ))}
      </div>
      <div className="border border-yellow-500">
        <h2>In Play</h2>
        <hr />
        <div className="flex gap-4 py-2 px-1">
          {cardsInPlay.map((card) => (
            <GameCardDisplay key={card.id} card={card} />
          ))}
        </div>
      </div>
      <div className="border border-yellow-500">
        <h2>In Hand</h2>
        <hr />
        <div className="flex gap-4 py-2 px-1">
          {hand.map((card) => (
            <GameCardDisplay key={card.id} card={card} />
          ))}
        </div>
      </div>
      <div className="border border-yellow-500">
        <p>discarded: {discarded.length}</p>
        <p>stack: {stack.length}</p>
      </div>
    </div>
  );
};

export default GameStateDisplay;
