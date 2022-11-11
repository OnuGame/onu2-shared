export type OnuSettings = {
    [key: string]: {
        name: string;
        value: string | null;
        defaults: string[];
    };
};
