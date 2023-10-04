// conditional statements in JS
const prompt = require("prompt-sync")() // must add this line in vs code to use prompt
let a = prompt("Hey, what's your age?");
a = parseInt(a);
if(a<0){
    alert("this is an invalid age");
}
else if(a<9){
    alert("you are a kid, and you cannot even think of driving");
}
else if(a<18 && a>9){
    alert("you are a kid and you may think of driving after 18");
}
else {
    alert("you are an adult and you may drive");
}
console.log("Done");
// Homework - explore switch statement and create a basic program
do {
console.log("1. Sheep\n2. Horse\n3. Tiger\n4. Exit\n");

let animal = prompt("enter the value: ");
animal = parseInt(animal);

switch (animal) {
    case 1:
        console.log("You selected: Sheep");
        break;
    case 2:
        console.log("You selected: Horse");
        break;
    case 3:
        console.log("You selected: Tiger");
        break;
    case 4:
        console.log("Exiting the program.");
        break;
    default:
        console.log("Invalid selection");
        break;
}
}while (animal !=4);
// ------------------------------------------------------------------------
//ternerary operator in JS

// const age = prompt("enter your age: ");
// s = parseInt(age);
// console.log("you can", age<18? "not drive": "drive");
