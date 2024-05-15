// FUNCTION ANATOMY

function sum(a, b) {
  return a + b;
}

// key word         --> function
// name             --> sum
// Parameters       --> a , b
// Curly brackets   --> {}
// Body (return)    --> return a + b

sum(3, 5);
// Called           --> name of the function and parenthesis: sum()
// Arguments        --> values in a function called

// Price with a discount
function calculateDiscountedPrice(price, discountPercentage) {
  const discount = (price * discountPercentage) / 100;
  const priceDiscount = price - discount;

  return priceDiscount;
}

const originalPrice = 55000;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log("Original price: $" + originalPrice);
console.log("Discount: " + discountPercentage + "%");
console.log("Price with discount: $" + finalPrice);

// if you wish you could write functions with a space
//between the name and the parenthesis or not:

// function name () {} or
// function name() {}

// just be consistent in your code.
