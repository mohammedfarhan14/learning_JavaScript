// practice set on opertaions and conditionals in js

// 1. use logical operator and findout whether th age of any person lies between 10 and 20
let age = prompt("enter your age: ");
if(age>0 && age<=10){
    alert("your age lies between 1-10");
}
else if(age>10 && age<=20){
    alert("your age lies between 11-20");
}
console.log("done");
//--------------------------------------------------------------------------------
// 2. demonstrate the use of switch case statements in js 
switch (age){
    case age<=10:
        console.log("your age lies between 1-10");
        break;
    case age>10:
        console.log("your age lies between 11-20");
        break;
    default:
        console.log("invalid");
        break;
}
//-----------------------------------------------------------------------------------
// 3. write a js program to find whether a number is dividible by 2 and 3
let x = prompt("enter the number: ");
if(x%2==0 && x%3==0){
    console.log("your number is divisible by 2 and 3");
}
else {
console.log("your number is not dividible by 2 and 3");
}
//-----------------------------------------------------------------------------------
// 4. write a js program to find whether a number is dividible by either 2 and 3
let y = prompt("enter the number: ");
if(y%2==0 || y%3==0){
    console.log("your number is divisible by 2 or 3");
}
else {
console.log("your number is not dividible by 2 or 3");
}