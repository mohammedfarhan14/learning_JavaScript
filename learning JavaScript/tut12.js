// practice set questions in JS

// 1. write a program to print the marks of a student in an object using for loop
let marks = {
   mohammedfarhan: 80,
   ali: 87,
   zufi: 56,
   afrid : 77,
   balaji : 89
};
for(let key=0; key<Object.keys(marks).length; key++){
    console.log("The Marks of " + Object.keys(marks)[key] + " are " + marks[Object.keys(marks)[key]]);
}
//---------------------------------------------------------------------------------------------------------------
//2. write the program in q1. using for in loop 

for (let key in marks){
    console.log("the marks of " + key + " are " + marks[key]);
}
//---------------------------------------------------------------------------------------------------------------

//3. write a program to try again until the user enters the correct number
let cn = 7;
let a;
while(a!=cn){
 console.log("incorrect! try again");
 a = prompt("Enter the number: ");
}
console.log("you have entered the correct number!");
//---------------------------------------------------------------------------------------------------------------
// write a function to find the mean of 5 numbers.
const mean = (v, w, x, y, z) =>{
    return (v+w+x+y+z)/5;
}
console.log(mean(1,2,3,4,5));

