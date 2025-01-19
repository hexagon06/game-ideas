import GameState from './state/game-state';
import GameTime from './time/game-time';
import React, { useState } from 'react';
import { GameTimeProvider } from './time/game-time-context';

export function App() {
  return (
    <GameTimeProvider>
      <div className="text-white bg-gray-800">
        <GameTime onNextTurn={(time) => ({})} />

        <GameState></GameState>
      </div>
    </GameTimeProvider>
  );
}

export default App;
