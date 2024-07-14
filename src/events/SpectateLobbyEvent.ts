import { BaseEvent } from "@lebogo/eventsystem";

export class SpectateLobbyEvent extends BaseEvent {
    constructor(public lobbyCode: string) {
        super("SpectateLobbyEvent");
    }
}
