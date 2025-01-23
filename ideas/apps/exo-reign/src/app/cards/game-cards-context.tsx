import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { GameCard } from './game-card';

const GameCardsContext = createContext<GameCardsContextProps | undefined>(
  undefined
);

export type GameCardsInit = {
  discarded?: GameCard[];
  hand?: GameCard[];
  stack?: GameCard[];
  inPlay?: GameCard[];
  awaiting?: GameCard[];
  handSize?: number;
};

const defaultHandSize = 5;

export const GameCardsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [discarded, setDiscarded] = useState<GameCard[]>([]);
  const [hand, setHand] = useState<GameCard[]>([]);
  const [handSize, setHandSize] = useState(defaultHandSize);
  const [stack, setStack] = useState<GameCard[]>([]);
  const [inPlay, setInPlay] = useState<GameCard[]>([]);
  const [awaiting, setAwaiting] = useState<GameCard[]>([]);

  const firstStack = useRef(true);

  const shuffleDiscardIntoStack = useCallback(() => {
    const newStack = stack.concat(discarded);
    setDiscarded([]);
    setStack(shuffleCards(newStack));
  }, [stack, discarded]);

  const fillHand = useCallback(() => {
    let required = handSize - hand.length;
    if (required <= 0) return;
    if (required >= stack.length) {
      setHand(hand.concat(stack));
      setStack([]);
      required = handSize - hand.length;
      shuffleDiscardIntoStack();
    }

    const newHand = hand.concat(stack.splice(0, required));
    setHand(newHand);
  }, [hand, handSize, shuffleDiscardIntoStack, stack]);

  useEffect(() => {
    if (firstStack.current && stack.length !== 0) {
      firstStack.current = false;
      fillHand();
    }
  }, [stack, firstStack, fillHand]);

  const handleNextTurn = () => {
    // setPower(maxPower);
  };

  const handleStartOfTurn = () => {
    fillHand();
  };

  function shuffleCards(cards: GameCard[]): GameCard[] {
    return cards.sort(() => Math.random() - 0.5);
  }

  function initializeValues(initialValues: GameCardsInit) {
    setDiscarded(initialValues.discarded ?? []);
    setHand(initialValues.hand ?? []);
    setStack(initialValues.stack ?? []);
    setInPlay(initialValues.inPlay ?? []);
    setAwaiting(initialValues.awaiting ?? []);
    setHandSize(initialValues.handSize ?? defaultHandSize);
    firstStack.current = true;
  }

  return (
    <GameCardsContext.Provider
      value={{
        discarded,
        hand,
        stack,
        inPlay,
        handSize,
        awaiting,
        handleNextTurn,
        handleStartOfTurn,
        initializeValues,
      }}
    >
      {children}
    </GameCardsContext.Provider>
  );
};

interface GameCardsContextProps {
  discarded: GameCard[]; // Cards that are discarded or have been played
  hand: GameCard[]; // Cards that are in the player's hand
  stack: GameCard[]; // Pile from where to draw cards
  inPlay: GameCard[]; // Cards that are played and have an effect on the state
  awaiting: GameCard[]; // Cards that are waiting to be activated to the deck
  handSize: number;

  handleNextTurn: () => void;
  handleStartOfTurn: () => void;
  initializeValues: (initialValues: GameCardsInit) => void;
}

export const useGameCards = (): GameCardsContextProps => {
  const context = useContext(GameCardsContext);
  if (!context) {
    throw new Error('useGamePower must be used within a GamePowerProvider');
  }
  return context;
};
