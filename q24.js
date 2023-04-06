"use strict";
// let string1 = "Jason Bourne is an operative";
// let string2 = "JASON Bourne is an operative";
// console.log(string1===string2); // result is false as string is case sensitive
// console.log(string1=string2); // result is false as string is case sensitive
Object.defineProperty(exports, "__esModule", { value: true });
// let stringtest1="ISLAM ALI";
// let stringtest2="Islam ali";
// console.log(stringtest1.toLowerCase()==stringtest2);
// console.log(8>2);
// console.log(8==8);
// console.log(7<5);
// console.log(105>=100);
// console.log(99<=78);
// let stringtest3="Karachi";
// let stringtest4="Lahore";
// let stringtest5="Karachi";
// console.log(stringtest3==stringtest4&&stringtest3==stringtest5);
// console.log(stringtest3==stringtest4||stringtest3==stringtest5);
let arraytest = ["Nvidia", "Radeon", "AMD"];
let elementtest = "AMD";
for (let l = 0; l < arraytest.length; l++) {
    if (elementtest === arraytest[l]) {
        console.log("AMD exists");
        break;
    }
    else if (!arraytest.includes(elementtest)) {
        console.log("Not Found");
        break;
    }
}
