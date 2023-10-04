// String methods in JS

let name = "mohammed farhan";
console.log(name.length); //this gives the length of the string
console.log(name.toUpperCase()); //to print in capital letters
console.log(name.toLowerCase()); //to print in small letters
console.log(name.slice(2,4)); //this will print 2 and 3
console.log(name.slice(2)); //this will print everything from 2 to end
console.log(name.replace("far", "WAR")); //this replaces the string 
let friend = "zufi";
console.log(friend.concat("shan"));
console.log(name, " is the friend of ", friend);
let friend2 = "        afrid      ";
console.log(friend2);
console.log(friend2.trim()); //to remove spaces in string


let animal = "horse";
console.log(animal[0]);
console.log(animal[1]);
console.log(animal[2]);
console.log(animal[3]);

// use a for loop to print a string
let str = "string";
for(let i = 0; i <str.length; i++)
console.log(str[i]);

//Strings are immutable in JS and java etc...
// it means strings cannot be changed
// for eg:- (str[4] = wee) // this cant be done
//if string methods are used then, the new string is returned, but original string doesnt change.




