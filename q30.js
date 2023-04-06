"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = ["Admin", "Bixby", "Alexa", "Siri", "Jarvis"];
function greeting() {
    let greeting = ", Thank you for logging in again.";
    for (let i = 0; i < users.length; i++) {
        if (users[i] === "Admin") {
            console.log("Hi " + users[i] + ", would you like a status report?");
        }
        else if (users[i] === "Bixby") {
            console.log(users[i] + greeting);
        }
        else if (users[i] === "Alexa") {
            console.log(users[i] + greeting);
        }
        else if (users[i] === "Siri") {
            console.log(users[i] + greeting);
        }
        else if (users[i] === "Jarvis") {
            console.log(users[i] + greeting);
        }
        //q31
    }
    if (users.length === 0) {
        console.log("Array is empty. Add some users!");
    }
}
greeting();
