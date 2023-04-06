 const travel = ["Madrid","Istanbul","Hunza","Casa Blanca","Rome"];
console.log("original list: " + travel);
let alphabeticalTravel = [...travel].sort();
console.log("list in alphabetical order: "+alphabeticalTravel);

//printing in reverse alphabetical order 
console.log("original list: " +travel);
function reverselist(){
    let aidlist= [...travel].sort();
    let reversetravel=aidlist.reverse();
    console.log("list in reverse alphabetical order: " +reversetravel);
}
reverselist();

console.log("original list:" +travel);

travel.sort();
console.log("alphebetical sorted original list: "+travel);
travel.reverse();
console.log("Reverse alphabetical sorted originial list: "+travel);

