let guestlist=["Tom","Professor Moody","Zain"];
let invitation=", You are invited to the exclusive dinner.";
console.log(guestlist[0]+invitation);
console.log(guestlist[1]+invitation);
console.log(guestlist[2]+invitation);

//q15 replacing a guest who can't come
console.log("Tom can't come to the dinner");
guestlist.splice(0,1,"Jason");
console.log(guestlist[0]+invitation);
console.log(guestlist[1]+invitation);
console.log(guestlist[2]+invitation);

//q16
let invitation2="Dear guests, we have found a bigger dinner table.";
guestlist.push("Alex");
guestlist.unshift("Mark");
guestlist.splice(2,0,"Gemma");
console.log(guestlist[0]+invitation);
console.log(guestlist[1]+invitation);
console.log(guestlist[2]+invitation);
console.log(guestlist[3]+invitation);
console.log(guestlist[4]+invitation);
console.log(guestlist[5]+invitation);

//q17
console.log(guestlist);
console.log("We are sorry to inform you that only two guests can be invited.");
console.log(guestlist.pop()+". Your dinner invitation is cancelled.");
console.log(guestlist.pop()+". Your dinner invitation is cancelled.");
console.log(guestlist.pop()+". Your dinner invitation is cancelled.");
console.log(guestlist.pop()+". Your dinner invitation is cancelled.");
console.log(guestlist);
console.log(guestlist[0]+", you are still invited.");
console.log(guestlist[1]+", you are still invited.");
guestlist.pop();
guestlist.pop();
console.log(guestlist);



