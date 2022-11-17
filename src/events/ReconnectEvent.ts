import { BaseEvent } from "@lebogo/eventsystem";

export class ReconnectEvent extends BaseEvent {
    constructor(public lobbyCode: string, public uuid: string) {
        super("ReconnectEvent");
    }
}
