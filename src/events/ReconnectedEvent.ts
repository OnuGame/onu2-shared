import { BaseEvent } from "@lebogo/eventsystem";

export class ReconnectedEvent extends BaseEvent {
    constructor() {
        super("ReconnectedEvent");
    }
}
