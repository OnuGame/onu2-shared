import { BaseEvent } from "@lebogo/eventsystem";

export class JoinLobbyEvent extends BaseEvent {
    constructor(public lobbyCode: string, public username: string) {
        super("JoinLobby");
    }
}
