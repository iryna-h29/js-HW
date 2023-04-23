import { showSet } from "./app.js";
import { input } from "./app.js";



class EmojiSet {
    constructor() {
        this.emojis = new Set();
    }
    add() {
        this.emojis.add(input.value);
        showSet(this.emojis);
    }
    delete(elem) {
        this.emojis.delete(elem);
    }
}

export const typicalSet = new EmojiSet;
