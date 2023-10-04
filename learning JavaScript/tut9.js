// loops in js

 //types of loops in js:-
//  1. for loops
//  2. for in loops 
//  3. for of loops
//  4. while loops
//  5. do while loops

//a program to add n natural numbers
let sum = 0;
let n = prompt("enter the value of n: ");
n = Number.parseInt(n)
for(let i=0; i<n; i++){
    sum += (i+1);
}
console.log("sum of ", n,"is = ",sum);
//------------------------------------------------------------------

//for in loop in js
let obj= {
    farhan: 90,
    zufi: 80,
    afrid: 70,
    ali: 60,
};
//for in loop
for(let x in obj){
    console.log("Marks of " + x + " are = " + obj[x]);
}//--------------------------------------------------------------------
//for of loop
for (let y of "mohammed farhan"){
    console.log(y); //object must be iterable,l for the working of (for 'of' loop)
}
   