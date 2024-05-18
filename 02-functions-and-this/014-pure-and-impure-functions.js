// PURE FUNCTIONS
// Given the same input, we get the same output

function sum(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

function addTen(y) {
  return y + 10;
}

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);

// IMPURE FUNCTIONS - SIDE EFFECTS

// 1. modify global variables.
// 2. Modify parameters.
// 3. HTTP solitudes.
// 4. Printouts of message on screen or console.
// 5. Manipulation of the DOM (Document Object Model).
// 6. Get the current time.

function sum(a, b) {
  console.log("A: ", a);
  return a + b;
}

let total = 0;

function sumWithSideEffect(a) {
  total += a;
  return total;
}
