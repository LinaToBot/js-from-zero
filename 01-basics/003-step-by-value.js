// step by value

let x = 1;
let y = "hola";
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c); //1 hola null 1 hola null

a = 12;
b = "Platzi";
c = undefined;

console.log(a, b, c); // 12 Platzi undefined

// If we want to change de value in the referenced variables we just change the value and that´s it.

// step by reference

let fruits = ["apple"];
console.log(fruits); // [ 'apple' ]
fruits.push("pear");
console.log(fruits); // [ 'apple', 'pear' ]

// first the method find the reference or direction in the memory, then it change the value, in this case the array change, we added a new position with the value "pear".

let breads = ["🍞"];
let breadsCopy = breads;
breads.push("🍰");
console.log(breads, breadsCopy); // [ '🍞', '🍰' ] [ '🍞', '🍰' ]
// returns the same because the variables point to the same memory address
