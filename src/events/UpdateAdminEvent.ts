import { BaseEvent } from "@lebogo/eventsystem";

export class UpdateAdminEvent extends BaseEvent {
    constructor(public uuid: string) {
        super("UpdateAdminEvent");
    }
}
