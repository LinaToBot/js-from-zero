/*
Logic Operators

&&      (Logical AND)       expr1 && expr2      Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
||      (Logical OR)        expr1 || expr2      Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
!       (Logical NOT)       !expr               Returns false if its single operand that can be converted to true; otherwise, returns true.

*/

// logical AND - &&
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false

// logical OR - ||
const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat

// logical NOT - !
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false

/* 

Short-circuit evaluation
As logical expressions are evaluated left to right, they are tested for possible "short-circuit"
evaluation using the following rules:

false && anything is short-circuit evaluated to false.

true || anything is short-circuit evaluated to true.

The rules of logic guarantee that these evaluations are always correct. Note that the anything 
part of the above expressions is not evaluated, so any side effects of doing so do not take effect.

Note that for the second case, in modern code you can use the Nullish coalescing operator (??) that works like ||,
but it only returns the second expression, when the first one is "nullish", i.e. null or 
undefined. It is thus the better alternative to provide defaults, when values like '' or 0 are 
valid values for the first expression, too.

*/

// This was taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#logical_operators

// OTHER EXAMPLES

const a = 10;
const b = 20;
const c = "10";

console.log(a == b && a === c); // false
console.log(a != b || a === c); // true
console.log(!(a === c)); // true --> !(false) --> the negation of false is: true
