// array methods in JS

let num = [1, 2, 3, 4, 5];

let b = num.toString(); //to convert it to string
console.log(b);

console.log(typeof num); // type of array is object
console.log(typeof b); // here it says string

let c = num.join("_"); // join method:- joins all array elements using a seperator
console.log(c)
console.log(typeof c)

num.pop();
console.log(num);

