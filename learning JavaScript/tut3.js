// difference between "let", "var", and "const"......

//---------------------------------------------------------------------
//"var" was being used before ES6 (ECMA script 6);

// before to declare any variable we used to use the keyword 'var'
// but today we dont use 'var'... because for some reasons, by the use of var keyword 
// the can the possibility of introduction of bugs in our program.

//"const" keyword is used to declare constants in the program
//"let" keyword is used to declare 'block scope' variables

console.log("javascript tutorial 3")
var a = 'b';
var a = "mohammed farhan"; // will not throw an error
var d = "mohammed farhan";//even after redecleration
var e = null;
// let a = "mohammed farhan";// will throw an error
//let a = "mohammed farhan ";//because of redecleration 
const pi = 3.14;
console.log(pi);
console. log(a);
console.log(e);

// 'var' may have the possibility to change the globally declared variable
// thats why we udont use 'var' anymore.
//now we use "let" and "const"