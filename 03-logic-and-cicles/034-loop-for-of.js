/* 
LOOP: FOR OF 

It use in iterable objects like arrays and string, list of something.

for (variable of object) {
    code to run
}

*/

let groceryShopping = [
  "asparagus",
  "eggs",
  "chicken breasts",
  "orange juice",
  "rice",
];

for (groceryProduct of groceryShopping) {
  let phrase = "we need: ";
  console.log((phrase += groceryProduct));
}
