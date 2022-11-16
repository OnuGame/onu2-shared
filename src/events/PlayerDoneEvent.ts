import { BaseEvent } from "@lebogo/eventsystem";

export class PlayerDoneEvent extends BaseEvent {
    constructor(public uuid: string) {
        super("PlayerDoneEvent");
    }
}
