import React, { useMemo, useState } from 'react';
import GameSeason from './game-season';

interface Time {
        seasons: number; 
        years: number;
    }

interface GameTimeProps {
    onNextTurn: (time: Time) => void;
}


const GameTime: React.FC<GameTimeProps> = ({  onNextTurn }) => {
    const handleNextTurn = () => {
        setSeasons(seasons + 1);
        onNextTurn(time);
    };


  const [seasons, setSeasons] = useState(0);
  const time = useMemo(() => ({
        seasons: seasons % 4,
        years: Math.floor(seasons / 4)
      }), [seasons])

    return (
        <div>
            <h2>Game Time</h2>
            
            <p><GameSeason season={time.seasons} /> of year {time.years}</p>
            <button onClick={handleNextTurn}>Next Turn</button>
        </div>
    );
};


export default GameTime;