//primitives and objects in javascript
//------------------------------------------------------------------------
// there are 7 primitive datatypes in javascript.
// primitive datatypes are fundamental datatypes that are built-in 
// inside javascript 
//----------primitive datatypes in js---------
 //1. null
// 2. number
// 3. symbol 
// 4. string
// 5. boolean
// 6. bigint
// 7. undifined

// non primitive dadatypes are 'objects' in JS.

let a = null;//null
let b = 123;//number
let c = true;//bool
let d = BigInt("123")+ BigInt("4");//gigint
let e = "mohammed farhan"//string
let f = Symbol("i am a nice symbol")//'S' in caps letter
let g = undefined// undefined
console.log(a,b,c,d,e,f,g);
console.log(typeof d)//i'll get the type of that particular variable


///objects in JS--------------------------

// an object is a non primitive datatype-------

//creating object: objecte is 'item'
const item = {
    "mohammed farhan" : true,
    "faiz" : false,                    // this all things are objects
    "faiz12" : true,                   // item is an object 
    "zufi" : 678,
    "ali" : undefined
};
console.log(item["mohammed farhan"]);
console.log(item["zufi"]);
console.log(item["ukwgq"]); // will show output as undefined //cuz not declared in my object
