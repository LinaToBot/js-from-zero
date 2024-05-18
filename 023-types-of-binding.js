// TYPES OF BINDING

// Binding in JavaScript refers to how the "this" keyword is bound or
// associated in a function. So, understanding the different types of
// binding is essential to understanding how "this" behaves in different
// situations.

// 1. Implicit Binding
// Occurs when a method of an object is invoked , and "this" is bound to the object containing the method.

const person = {
  name: "Adam",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};
person.greet(); // Output: Hello, I'm Adam

// 2. Explicit Binding
// Occurs when methods like call(), apply(), or bind() are used to explicity set the value of "this".

function greet() {
  console.log(`Hello, I'm ${this.name}`);
}

const adam = { name: "Adam" };
greet.call(adam); // Output: Hello, I'm Adam

// 3. New Binding
// Occurs when a function is invoked with the "new" keyword, thus creating a new object and binding "this" to that object.

function Person(name) {
  this.name = name;
}

const sam = new Person("Sam");
console.log(adam.name); // Output: Sam

// 4. Lexical Binding
// Occurs when "this" is used in a function inside another function. In this case, "this" is linked to the lexical context of the outer function.

const user = {
  name: "Olaf",
  greet: function () {
    const innerFunction = () => {
      console.log(`Hello, I'm ${this.name}`);
    };
    innerFunction();
  },
};
user.greet(); // Output: Hello, I'm Olaf

// 5. Window Binding
// Occurs when none of above rules apply and "this" is bound to the global object (e.g. window in the browser).

function showName() {
  console.log(this.name);
}

window.name = "Pauline";
showName(); // Output: Pauline
