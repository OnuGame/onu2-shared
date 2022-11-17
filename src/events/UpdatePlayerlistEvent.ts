import { BaseEvent } from "@lebogo/eventsystem";
import { PlayerlistPlayer } from "../PlayerlistPlayer";

export class UpdatePlayerlistEvent extends BaseEvent {
    constructor(public playerlist: PlayerlistPlayer[]) {
        super("UpdatePlayerlistEvent");
    }
}
