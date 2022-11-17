import { BaseEvent } from "@lebogo/eventsystem";

export class PlayerJoinedEvent extends BaseEvent {
    constructor(public username: string, public uuid: string) {
        super("PlayerJoined");
    }
}
