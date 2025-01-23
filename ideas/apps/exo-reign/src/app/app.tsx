import GameState from './state/game-state';
import GameTime from './time/game-time';
import { GameTimeProvider } from './time/game-time-context';
import { GamePowerProvider } from './power/game-power';
import { GameCardsProvider } from './cards/game-cards-context';

export function App() {
  return (
    <GamePowerProvider>
      <GameTimeProvider>
        <GameCardsProvider>
          <div className="text-white bg-gray-800">
            <GameTime onNextTurn={(time) => ({})} />

            <GameState></GameState>
          </div>
        </GameCardsProvider>
      </GameTimeProvider>
    </GamePowerProvider>
  );
}

export default App;
