import { BaseEvent } from "@lebogo/eventsystem";

export class PlayerTurnEvent extends BaseEvent {
    constructor(public uuid: string) {
        super("PlayerTurn");
    }
}
