import { BaseEvent } from "@lebogo/eventsystem";

export class CardRequestEvent extends BaseEvent {
    constructor() {
        super("CardRequestEvent");
    }
}
