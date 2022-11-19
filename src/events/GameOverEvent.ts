import { BaseEvent } from "@lebogo/eventsystem";

export class GameOverEvent extends BaseEvent {
    constructor() {
        super("GameOverEvent");
    }
}
