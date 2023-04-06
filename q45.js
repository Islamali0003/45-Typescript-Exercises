"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function car(Manufacturer1, Model1, Color1, Class1) {
    let carinfo = {
        Manufacturer: Manufacturer1,
        Model: Model1,
        Color: Color1,
        Class: Class1,
    };
    console.log(carinfo.Manufacturer);
    console.log(carinfo.Model);
    console.log(carinfo.Color);
    console.log(carinfo.Class);
}
car("Toyota", "Corolla", "Grey", "GLI");
car("Audi", "A8", "Black");
//how to avoid printing the undefined optional argument?
