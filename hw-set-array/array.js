import { input } from "./app.js";
import { showArr } from "./app.js";



class EmojiArr {
    constructor() {
        this.emojis = [];
    }
    add() {
        this.emojis.push(input.value);
        showArr(this.emojis);
    }
}

export const typicalArr = new EmojiArr;
