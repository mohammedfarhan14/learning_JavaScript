//strings in JS

let name = "mohammed farhan";
console.log(name);
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
//----------------------------------------------------------------------------------
//Template literals in JS
let boy1 = "mohammed farhan";
let boy2 = "afrid";
//afrid is friend of farhan
let sentence = `${boy2} is a friend of ${boy1}`;  //this symbol is called `backtick symbol`
console.log(sentence);
//Template literals use backtics instead of quotes to define a string

// We can insert variables directly in template literals. This is called string interpolations.
//--------------------------------------------------------------------------------------
//Escape Sequence Characters in JS

let fruit = "Bana\"na";
console.log(fruit);
                        //this is used to add ( ' or " )in a string.  (\' or \")
let animal = 'Tig\'er';
console.log(animal);

