import { ActionCard, ActorCard } from "../cards/game-card";
import { GameCardsInit } from "../cards/game-cards-context";

const cardIdGen = idGenerator();

const cards: Partial<GameCardsInit> = {
    inPlay: [
        createActionCard(),
        createActorCard(),
    ],
    stack: [
        createActionCard(),
        createActorCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActorCard(),
        createActorCard(),
        createActorCard(),
        createActorCard(),
    ],
    awaiting: [
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActionCard(),
        createActorCard(),
        createActorCard(),
        createActorCard(),
        createActorCard(),
        createActorCard(),
        createActorCard(),
        createActorCard(),
        createActorCard(),
        createActorCard(),
        createActorCard(),
        createActionCard(),
    ]
}

function createActionCard(overrides?: Partial<Omit<ActionCard, 'id'>>): ActionCard {
    const id = cardIdGen.next();

    const base: ActionCard = {
        id: id,
        type: 'action',
        title: `Action Card ${id}`,
        image: 'https://placehold.co/200',
        imageAlt: `Action Card ${id}`,
        description: 'This is an action card',
        effect: `This is the effect of the action card ${id}`,
        onPlay: () => { console.log(`Action Card ${id} played`) },
        stateCost: { power: parseInt(id) },
        stateEffect: { power: parseInt(id) },
        stateUpdateEffect: { power: parseInt(id) }
    };

    return { ...base, ...overrides };
}

function createActorCard(overrides?: Partial<Omit<ActorCard, 'id'>>): ActorCard {
    const id = cardIdGen.next();

    const base: ActorCard = {
        id: id,
        type: 'actor',
        title: `Actor Card ${id}`,
        image: 'https://placehold.co/200',
        imageAlt: `Actor Card ${id}`,
        description: 'This is an actor card',
        requirements: { power: parseInt(id) },
        onPlay: () => { console.log(`Actor Card ${id} played`) },
        stateCost: { power: parseInt(id) },
        stateEffect: { power: parseInt(id) },
        stateUpdateEffect: { power: parseInt(id) }
    };

    return { ...base, ...overrides };
}

function idGenerator(): { next: () => string } {
    let id = 0;
    return {
        next: () => {
            id++;
            return id.toString();
        }
    }
}

export function defaultCards(): Partial<GameCardsInit> {
    return JSON.parse(JSON.stringify(cards)); // clone(cards);
}
