import { BaseEvent } from "@lebogo/eventsystem";

export class JoinedLobbyEvent extends BaseEvent {
    constructor(public uuid: string) {
        super("JoinedLobbyEvent");
    }
}
