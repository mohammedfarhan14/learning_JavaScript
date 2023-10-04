//practice set questions of js

// 1. create a variable of datatype string and try to add a number to it
let a = " mohammed farhan";
let b = 7;
console.log(a+b);
// 2. use typeof operator to find out data type of the string in previous question
console.log(typeof(a+b));
// 3. create a const object in js. can u change it to hold a number later 
const x ={
    name: "mohammed farhan",
    section: 1,
    boy: true
} // you cannot change the constant later 
//x = 123;//this will show an error
console.log(typeof(x));// output is object
// 4. try to add a new key to the const object in problem 3. where you able to add it.
//x['friend']= "zufi";//this will show an error
x['friend']="zufi";
x['name']= "mohammed"
console.log(x);
// x is a reference to this object

// 5. write a js program to create a word meaning dictionary of 5 words

console.log("word meaning dictionaty");
const dictionary = {
    "appreciate": "to be grateful or thankful for",
    "resolve": "to come to a definite or earnest decision about; determine",
    "illuminate": "to supply or brighten with light; light up.",
    "unique": "existing as the only one or as the sole example"
};
console.log(dictionary);
console.log(dictionary.unique);//to access single term from object 
