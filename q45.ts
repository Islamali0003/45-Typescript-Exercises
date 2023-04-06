function car(Manufacturer1:string, Model1:any, Color1?:string,Class1?:string){
    let carinfo={
        Manufacturer: Manufacturer1,
        Model: Model1,
        Color: Color1,
        Class: Class1,

    }
     console.log(carinfo.Manufacturer);
     console.log(carinfo.Model);
     console.log(carinfo.Color);
     console.log(carinfo.Class);
}
car("Toyota","Corolla","Grey","GLI");
car("Audi","A8","Black");

//how to avoid printing the undefined optional argument?