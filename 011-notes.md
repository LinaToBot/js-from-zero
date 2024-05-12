# Compound multiplication operator

The "compound multiplication operator".It is a type of compound assignment operator that combines
the multiplication operator "asterisk" with the assignment operator "=".

This is useful when you want to multiply the current value of a variable by another value and update
the variable with the result. Whether you multiply a number or concatenate strings, it helps make the code more concise and readable.

let x = 5;
x \*= 2; // this is equivalent to: x = x \* 2;
console.log(x); // 10

or

let sentence = "Hi, my name "

sentence \*= "is Paulina"

console.log(sentence) // "Hi, my name is Paulina"
