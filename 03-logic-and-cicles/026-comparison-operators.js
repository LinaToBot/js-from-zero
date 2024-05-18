/*
    Comparison operators


 ==     (Equal): Returns true if the operands are equal.

 ===    (Strict equal):Returns true if the operands are equal and of the same type. 
 
 !=     (Not equal): Returns true if the operands are not equal.
 
 !==    (Strict not equal): Returns true if the operands are of the same type but not equal, or are of different type.
 
 >      (Greater than): Returns true if the left operand is greater than the right operand.
 
 <      (Less than): Returns true if the left operand is less than the right operand.
 
 >=     (Greater than or equal): Returns true if the left operand is greater than or equal to the right operand.
 
 <=     (Less than or equal): Returns true if the left operand is less than or equal to the right operand.

*/

const a = 10;
const b = 20;
const c = "10";

console.log(a == b); // false
console.log(a === c); // false
console.log(a == c); // true
console.log(a != b); // true
console.log(a !== c); // true
console.log(a > b); // false
console.log(a <= b); // true
console.log(a >= b); // false
console.log(a > c); // false
