import { Comparable } from "./Comparable";
import { v4 as uuid } from "./UUIDGenerator";

export class Card implements Comparable {
    id: string;
    constructor(public type: CardType, public color: CardColor, id?: string) {
        this.id = id || uuid();
    }
    compare(other: Card): boolean {
        const typeIsEqual = this.type == other.type;
        const colorIsEqual = this.color.compare(other.color);
        return typeIsEqual || colorIsEqual;
    }
}

export type NumberCardType = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type WishCardType = "w" | "p4";

export type ActionCardType = "sk" | "sw" | "p2";

export type SpecialCardType = "rd" | "cy" | "rc";

export type CardType = NumberCardType | WishCardType | ActionCardType | SpecialCardType;

export type CardColorType = "r" | "g" | "b" | "y" | "c" | "p" | "none";

export class CardColor implements Comparable {
    constructor(public color: CardColorType) {}
    compare(other: CardColor): boolean {
        const thisPurpleValid = ["r", "b"].includes(this.color);
        const otherPurpleValid = ["r", "b"].includes(other.color);

        const thisTurquoiseValid = ["g", "b"].includes(this.color);
        const otherTurquoiseValid = ["g", "b"].includes(other.color);

        const colorEqual = this.color == other.color;
        const variationValid =
            (thisPurpleValid && other.color == "p") ||
            (otherPurpleValid && this.color == "p") ||
            (thisTurquoiseValid && other.color == "c") ||
            (otherTurquoiseValid && this.color == "c") ||
            other.color == "none" ||
            this.color == "none";

        return colorEqual || variationValid;
    }
    static Colors: CardColorType[] = ["r", "g", "b", "y", "c", "p", "none"];
}
