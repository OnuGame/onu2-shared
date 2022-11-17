import { BaseEvent } from "@lebogo/eventsystem";

export class PingEvent extends BaseEvent {
    constructor(public ping: number) {
        super("Ping");
    }
}
