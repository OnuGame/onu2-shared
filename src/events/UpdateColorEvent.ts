import { BaseEvent } from "@lebogo/eventsystem";
import { CardColor } from "../Card";

export class UpdateColorEvent extends BaseEvent {
    constructor(public color: CardColor) {
        super("UpdateColorEvent");
    }
}
