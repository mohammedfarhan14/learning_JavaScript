//practice set on strings

// 1. what will be the following print in js ? 
// console,log("har\" ".length);
let a = "har\"";
console.log(a.length);
//-------------------------------------------------------------------------------------
// 2. explore the includes, startswith, and ends with function of a string 

let statement = 'the quick brown fox jumps over the lazy dog';
const word = 'fox';
console.log(`the word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence` );

//-------------------------------------------------------------------------------------
//3. write a program to convert a given string to lower case

let str = "mohammed farhan";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
//-------------------------------------------------------------------------------------

//4. extract the amount out of the string
// "please give Rs 1000"

let sentence = "please give Rs 1000";
console.log(sentence.slice("please give Rs ".length));


//-------------------------------------------------------------------------------------

//5. try to change 4th character of a given string. were you able to do it

let friend = "zufishan";
friend[3]= 'F';
console.log(friend); //cannot be changed because strings are immutable

