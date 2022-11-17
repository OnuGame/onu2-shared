import { BaseEvent } from "@lebogo/eventsystem";

export class UpdateDrawAmountEvent extends BaseEvent {
    constructor(public drawAmount: number) {
        super("UpdateDrawAmountEvent");
    }
}
