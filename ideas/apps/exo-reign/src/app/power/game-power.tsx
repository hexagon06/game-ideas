import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

const GamePowerContext = createContext<GamePowerContextProps | undefined>(
  undefined
);

export const GamePowerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [power, setPower] = useState(3);
  const [maxPower, setMaxPower] = useState(3);

  const handleNextTurn = () => {
    setPower(maxPower);
  };

  return (
    <GamePowerContext.Provider value={{ power, maxPower, handleNextTurn }}>
      {children}
    </GamePowerContext.Provider>
  );
};

interface GamePowerContextProps {
  /**
   * The current power level; regenerates to maxPower each turn.
   */
  power: number;
  /**
   * The maximum power level; calculated from the current gameState
   */
  maxPower: number;
  handleNextTurn: () => void;
}

export const useGamePower = (): GamePowerContextProps => {
  const context = useContext(GamePowerContext);
  if (!context) {
    throw new Error('useGamePower must be used within a GamePowerProvider');
  }
  return context;
};
