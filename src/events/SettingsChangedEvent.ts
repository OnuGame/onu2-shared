import { BaseEvent } from "@lebogo/eventsystem";
import { OnuSettings } from "../OnuSettings";

export class SettingsChangedEvent extends BaseEvent {
    constructor(public settings: OnuSettings) {
        super("SettingsChangedEvent");
    }
}
