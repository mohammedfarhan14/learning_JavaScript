// functions in JS

const hello = ()=>{ // this kind of function is known as arrow function
    console.log("hey! how are you!!");
    return "hi";// if it returns any value
}
hello();// if it doesnot return any value
let v = hello();
console.log(v);
//----------------------------------------------------------------------------------
function avg(x,y){
    console.log("Done");
    //return Math.round( (x+y)/2 ); //math.round is used to round off any number
    return (x+y)/2;
}
let a = 1;
let b = 2;
let c = 3;
console.log("the average of a and b is = ", avg(a,b));
console.log("the average of b and c is = ", avg(b,c));
console.log("the average of a and c is = ", avg(a,c));
console.log("done");
// ---------------------------------------------------------------------------------------
//arrow functions
const sum = (p, q)=>{
    return p + q;
};
sum (a,b);

  