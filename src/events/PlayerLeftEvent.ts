import { BaseEvent } from "@lebogo/eventsystem";

export class PlayerLeftEvent extends BaseEvent {
    constructor(public uuid: string) {
        super("PlayerLeftEvent");
    }
}
