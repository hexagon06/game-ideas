import React from 'react';
import GameSeason from './game-season';
import { useGameTime } from './game-time-context';

export interface Time {
  seasons: number;
  years: number;
}

interface GameTimeProps {
  onNextTurn: (time: Time) => void;
}

const GameTime: React.FC<GameTimeProps> = () => {
  const { time, handleNextTurn } = useGameTime();

  return (
    <div>
      <h2 className="text-2xl font-extrabold pb-3">Game Time</h2>

      <p>
        <GameSeason season={time.seasons} /> of year {time.years}
      </p>
      <button onClick={handleNextTurn}>Next Turn</button>
    </div>
  );
};

export default GameTime;
