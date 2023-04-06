"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["User3", "Ahmed", "Jason", "Pewdipie", "Bob"];
let new_users = ["Matthew", "Sage", "JASON", "Bob", "Rafael"];
function arraysearch() {
    let currentlowercase = current_users.map(str => str.toLowerCase());
    console.log(currentlowercase);
    let newlowercase = new_users.map(str => str.toLowerCase());
    console.log(newlowercase);
    for (let i = 0; i < currentlowercase.length; i++) {
        if (currentlowercase.includes(newlowercase[i])) {
            console.log(new_users[i] + " is already used. Enter an new username");
        }
        else {
            console.log(new_users[i] + " is available to use as a username.");
        }
    }
}
arraysearch();
