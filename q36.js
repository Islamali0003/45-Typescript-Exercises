"use strict";
// function make_shirt(size:string, text:string){
// console.log("The size is "+size+ " The print is "+text);
// }
// make_shirt("medium", "rock");
Object.defineProperty(exports, "__esModule", { value: true });
//q37
function make_shirt(size = "large", text = "I love Typescript") {
    console.log("The size is " + size + " The print is " + text);
}
make_shirt();
make_shirt("Medium");
make_shirt("medium", "rock");
