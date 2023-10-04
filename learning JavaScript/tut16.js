//arrays in JS

//arrays are mutable and therefore can be changed
let marks_class_12 =[91,82,63,74, null, false, "not present"];
console.log(marks_class_12);
console.log(marks_class_12[3]);
console.log("The array length is = ",marks_class_12.length);
// for adding a new value in arrray
marks_class_12[7] = 66;
console.log(marks_class_12);

//for changing the value of the array
marks_class_12[0] = 100;
console.log(marks_class_12);

console.log(marks_class_12[8]); // this will print undefined as index 7 doesnt exist

// in JS arrays are objects. the type of operator on arrays gives the answer or return the value as objects
console.log( typeof marks_class_12);

