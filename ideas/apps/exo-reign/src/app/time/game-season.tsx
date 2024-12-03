import React from 'react';

type GameSeasonProps = {
    season: number;
};

const GameSeason: React.FC<GameSeasonProps> = ({ season }) => {
    let seasonName = '';

    switch (season) {
        case 0:
            seasonName = 'Spring';
            break;
        case 1:
            seasonName = 'Summer';
            break;
        case 2:
            seasonName = 'Autumn';
            break;
        case 3:
            seasonName = 'Winter';
            break;
        default:
            seasonName = 'Unknown';
            break;
    }

    return <span>{seasonName}</span>;
};

export default GameSeason;