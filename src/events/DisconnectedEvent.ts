import { BaseEvent } from "@lebogo/eventsystem";

export class DisconnectedEvent extends BaseEvent {
    constructor() {
        super("DisconnectedEvent");
    }
}
