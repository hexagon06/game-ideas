import React, { useEffect, useMemo, useState } from 'react';
import { useGameTime } from '../time/game-time-context';

const GameStateDisplay: React.FC = () => {
  const { time } = useGameTime();

  const formattedTime = useMemo(() => {
    return `sss: ${time.years}`;
  }, [time]);

  const [passed, setPassed] = useState(0);

  useEffect(() => {
    const s = time.seasons;

    setPassed(passed + 1);
  }, [time]);

  return (
    <div>
      {formattedTime} // {passed}
    </div>
  );
};

export default GameStateDisplay;
