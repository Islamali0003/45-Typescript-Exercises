"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let odinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function odinal() {
    for (let i = 0; i < odinalNumbers.length; i++) {
        if (odinalNumbers[i] === 1) {
            console.log(odinalNumbers[i] + "st");
        }
        else if (odinalNumbers[i] === 2) {
            console.log(odinalNumbers[i] + "nd");
        }
        else if (odinalNumbers[i] === 3) {
            console.log(odinalNumbers[i] + "rd");
        }
        else {
            console.log(odinalNumbers[i] + "th");
        }
    }
}
odinal();
