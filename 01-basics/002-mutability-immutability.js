// primitive type - immutable
let number = 23;
number = number + 10;
console.log(number); // 33

// js does not change the original value (10), js create a new value for that variable

// other example is:

let isTrue = true;
isTrue = false;
console.log(isTrue); // false

// complex type - mutable
let user = { name: "Susan", age: 15 };
user.age = 20;
console.log(user.age); // 20

// here, js changes the original value by its reference.

let fruits = ["apple", "pear"];
fruits[0] = "watermelon";
console.log(fruits); // [ 'watermelon', 'pear' ]

function changeName(object) {
  object.name = "new name";
}

let person = { name: "Anne" };
changeName(person);
console.log(person); // { name: 'new name' }
