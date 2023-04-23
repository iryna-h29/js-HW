import { arrEmoji } from "./emoji.js";
import { typicalSet } from "./set.js";
import { typicalArr } from "./array.js";

function randomizeEmoji() {
    input.value = arrEmoji[Math.floor(Math.random() * arrEmoji.length)];
};

function addEmoji() {
    if (input.value !== "") {
        typicalSet.add();
        typicalArr.add();
    }
    randomizeEmoji();
}

export let showSet = function(emojis) {
    let newsetArr = Array.from(emojis);
    let setOutput = document.querySelector(".set-output");
    setOutput.innerHTML = newsetArr;
}

export let showArr = function(emojis) {
    let arrOutput = document.querySelector(".arr-output");
    arrOutput.innerHTML = emojis;
}

export const input = document.querySelector("#emojInput");

let btn = document.querySelector('button');
btn.addEventListener('click', addEmoji);
window.onload = randomizeEmoji;