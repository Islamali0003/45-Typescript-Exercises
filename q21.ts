// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
//   }
  
//   const myPerson: Person = {
//     name: 'John',
//     age: 30,
//     isStudent: true
//   };
// In this example, we define an interface called Person that specifies the type of an object with the same properties as our myObject example. We then declare a variable called myPerson of type Person and assign an object that conforms to the Person interface to it.

// Using object types like Person can help make your code more type-safe, since TypeScript will check that the properties of your object have the correct types and will give you error messages if you try to assign a value of the wrong type to a property.

// Overall, objects are an important part of TypeScript, as they allow you to represent complex data structures and work with them in a type-safe way.


interface biodata {
    Name: string;
    Age: number;
    Married: boolean;
    CriminalHistory: Boolean;
    Residence: String;
}
let PersonRecord: biodata= {
    Name: "Ahmed",
    Age: 23,
    Married: false,
    CriminalHistory: false,
    Residence: "Lahore",
}

console.log("Name: "+PersonRecord.Name);
console.log("Age: "+PersonRecord.Age);
console.log("Married: "+PersonRecord.Married);
console.log("CriminalHistory: "+PersonRecord.CriminalHistory);
console.log("Residence: "+PersonRecord.Residence);