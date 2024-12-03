import GameTime from './time/game-time';
import React, { useState } from 'react';

export function App() {

  return (
    <div>
      <GameTime onNextTurn={(time) => {}} />
    </div>
  );
}


export default App;
