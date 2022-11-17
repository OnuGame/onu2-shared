import { BaseEvent } from "@lebogo/eventsystem";

export class GameStartEvent extends BaseEvent {
    constructor() {
        super("GameStart");
    }
}
