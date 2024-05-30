/* 
LOOP: FOR IN

It is used in enumerable objects to iterate in its properties and values


for (variable in object) {
    code to run
}
*/

const groceryShopping = {
  asparagus: 10,
  eggs: 12,
  chicken_breasts: 3,
  orange_juice: 1,
  rice: "1 kg",
};

for (groceryProduct in groceryShopping) {
  console.log(groceryProduct);
}
// output:
// asparagus
// eggs
// chicken_breasts
// orange_juice
// rice

for (groceryProduct in groceryShopping) {
  // groceryProduct, here is a numerical variable, it returns a index
  console.log(`${groceryProduct}: ${groceryShopping[groceryProduct]}`);
}
// output:
// asparagus: 10
// eggs: 12
// chicken_breasts: 3
// orange_juice: 1
// rice: 1 kg

for (groceryProduct in groceryShopping) {
  console.log(`${groceryShopping[groceryProduct]}`);
}
/*  
output: 
10
12
3
1
1 kg
*/

// for each...in — a similar but deprecated statement that iterates over
// the values ​​of an object's properties, rather than the property names themselves.
