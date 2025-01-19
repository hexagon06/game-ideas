import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Time } from './game-time';

const GameTimeContext = createContext<GameTimeContextProps | undefined>(
  undefined
);

export const GameTimeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [seasons, setSeasons] = useState(0);

  const handleNextTurn = () => {
    setSeasons(seasons + 1);
  };

  const time = useMemo(
    () => ({
      seasons: seasons % 4,
      years: Math.floor(seasons / 4),
    }),
    [seasons]
  );

  return (
    <GameTimeContext.Provider value={{ time, handleNextTurn }}>
      {children}
    </GameTimeContext.Provider>
  );
};

interface GameTimeContextProps {
  time: Time;
  handleNextTurn: () => void;
}

export const useGameTime = (): GameTimeContextProps => {
  const context = useContext(GameTimeContext);
  if (!context) {
    throw new Error('useGameTime must be used within a GameTimeProvider');
  }
  return context;
};
