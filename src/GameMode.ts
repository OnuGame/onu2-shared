import { CardColorType, CardType } from "./Card";

export type GameMode = {
    name: string;
    presets: CardPreset[];
};

export type CardPreset = {
    colors: CardColorType[];
    types: CardType[];
};

const CLASSIC_PRESET: CardPreset = {
    colors: ["r", "g", "b", "y"],
    types: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
};

const WISH_PRESET: CardPreset = {
    colors: ["c"],
    types: ["w", "p4"],
};

const ACTION_PRESET: CardPreset = {
    colors: CLASSIC_PRESET.colors,
    types: ["p2", "sk", "sw"],
};

export function getGameMode(gameModeName: string): GameMode {
    for (const key of Object.keys(GameModes)) {
        const gameMode = GameModes[key];
        if (gameMode.name == gameModeName) return gameMode;
    }
    return GameModes.CLASSIC;
}

export const GameModes: { [key: string]: GameMode } = {
    CLASSIC: { name: "Classic", presets: [CLASSIC_PRESET, WISH_PRESET, ACTION_PRESET] },
    LITE: { name: "Lite", presets: [CLASSIC_PRESET] },
    SPECIAL: {
        name: "Special",
        presets: [
            {
                colors: [...CLASSIC_PRESET.colors, "t", "p"],
                types: CLASSIC_PRESET.types,
            },
            WISH_PRESET,
            {
                colors: [...ACTION_PRESET.colors, "t", "p"],
                types: ACTION_PRESET.types,
            },
            {
                colors: ["t", "p"],
                types: ["cy", "rd"],
            },
        ],
    },
};
