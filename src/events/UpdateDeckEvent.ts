import { BaseEvent } from "@lebogo/eventsystem";
import { Card } from "../Card";

export class UpdateDeckEvent extends BaseEvent {
    constructor(public deck: Card[]) {
        super("UpdateDeck");
    }
}
