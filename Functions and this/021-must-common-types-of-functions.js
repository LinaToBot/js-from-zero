// Must common types of functions in javascript

// 1. Declarative Functions (or Named Functions):
// Defined with the function keyword. Can be referenced before their declaration.

function sum(a, b) {
  return a + b;
}

// 2. Expressive Functions (or Anonymous Functions):
// Assigned to variables. Often used to assign functions as values to variables.

const sum = function (a, b) {
  return a + b;
};

// 3. Arrow Functions:
// Introduced in ES6, they provide a more concise syntax. They have a slightly different behavior regarding the value of this.

const sum = (a, b) => a + b;

// 4. Constructor Functions:
// Used to create objects with new. Use this to assign properties to the new object.

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("John", 25);

// 5. Higher-Order Functions:
// Accept functions as arguments or return functions.
// Examples include map, filter, reduce.
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .map((number) => number * 2) // [2, 4, 6, 8, 10]
  .filter((number) => number > 5) // [6, 8, 10]
  .reduce((accumulator, number) => accumulator + number, 0); // 24
console.log(result); // 24

// 6. Recursive Functions:
// Call themselves during execution. Useful for problems that can be divided into smaller subproblems.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// 7. Nested Functions:
// Defined within another function. Can access the variables of the enclosing function (closure).

function outer() {
  let outerVariable = "Outer";
  function inner() {
    console.log(outerVariable);
  }
  inner();
}
outer();

// 8. Object Methods:
// Functions that are properties of objects and are called methods when invoked in the context of that object.

const object = {
  method: function () {
    console.log("Hello from the method");
  },
};
object.method();

// 9. Asynchronous Functions:
// Used to handle asynchronous operations with callbacks, Promises, or Async/Await.

async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}

// 10. Pure Functions:
// Given the same set of inputs, they will always produce the
// same result without causing observable side effects.
// Do not depend on or modify external states.

function sum(a, b) {
  return a + b;
}
