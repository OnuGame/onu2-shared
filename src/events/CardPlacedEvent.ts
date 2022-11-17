import { BaseEvent } from "@lebogo/eventsystem";

import { Card } from "../Card";

export class CardPlacedEvent extends BaseEvent {
    constructor(public card: Card) {
        super("CardPlacedEvent");
    }
}
