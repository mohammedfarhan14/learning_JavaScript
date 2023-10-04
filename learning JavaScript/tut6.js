//expressions and operators in jsvascript

// an expression is a value given to a variable or constant.
// a fragment of code that produces an expression is known as an expression.
//every value written is literally an expression. for eg:- 77 or "farhan"
//operators... u know what are those, lol!
//-------------------------------------------------------------------------------------
77;
"mohammed farhan"; // this things will get executed and will not show an error
true;
console.log("operators in JS")
let a = 34;
let b = 127;
//------------------------------------------------------------------------------
//Arethmetic operators in JS
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a / b = ", a/b);
console.log("a * b = ", a*b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b); // a power b

console.log("a ++ = ", a++);
console.log(a); // this will show a = 11 not 10 cuz incremental operator

console.log(" a -- = ", a--);
console.log(a);// this will show a = 10 again due to decremental operator

console.log("++ a = ", ++a); 
//this will first increment a and then print it

console.log("-- a = ", --a);
// this will decrement a and the print it

//--------------------------------------------------------------------------------
//Assignment Operators in JS
console.log("Assignment Operators in JS");
let x = 15;
x += 5 // is same as (a = a+5)
console.log(x);

x -= 5 // is same as (a = a-5)
console.log(x);

 // is same as (a = a*5)
console.log(x *= 5); //can also be written as

x /= 5 // is same as (a = a/5)
console.log(x);

//-------------------------------------------------------------------------------
//Comparison Operators in JS
console.log("Comparison Operators in JS")
let comp1 = 20;
let comp2 = 50;
console.log("comp1 == comp2", comp1==comp2);
console.log("comp1 < comp2", comp1<comp2);
console.log("comp1 > comp2", comp1>comp2);
console.log("comp1 != comp2", comp1!=comp2);
console.log("comp1 === comp2", comp1===comp2);// === is used to check equal value and type

//-------------------------------------------------------------------------------
// Logical opertors in JS
console.log("Logical opertors in JS");
let w = 6;
let z = 4;
console.log(w>z && w!=z);
console.log(w>z || w==z);
console.log(!false);// will become true
console.log(!true);// will become false
// ! operator will change true to false and false to true (viseversa)
