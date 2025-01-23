export type StateValues = {
    power: number;
    money: number;
    influence: number;
};

type CardBase = {
    id: string;
    title: string;
    image: string;
    imageAlt: string;
    description: string;
    onPlay: () => void;
    stateCost: Partial<StateValues>;
    stateEffect: Partial<StateValues>
    stateUpdateEffect: Partial<StateValues>
}

export type ActionCard = CardBase & {
    type: 'action';
    effect: string;
};

export type ActorCard = CardBase & {
    type: 'actor';
    requirements: Partial<StateValues>
};

export type GameCard = ActionCard | ActorCard;