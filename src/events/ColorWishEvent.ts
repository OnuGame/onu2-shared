import { BaseEvent } from "@lebogo/eventsystem";
import { CardColorType } from "../Card";

export class ColorWishEvent extends BaseEvent {
    constructor(public color?: CardColorType) {
        super("ColorWish");
    }
}
