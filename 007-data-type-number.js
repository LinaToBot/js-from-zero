// 1. Data type integer number and decimal number.
const integer = 34;
const decimal = 2.34;
console.log(typeof integer, typeof decimal); // number number

// 2. Scientific notation
const scientific = 5e3;
console.log(typeof scientific); // number

// 3. Infinity and NaN
const infinityNumber = Infinity;
const notANumber = NaN;
console.log(typeof infinityNumber, typeof notANumber); // number number

// ARITHMETICS OPERATIONS

// 1. Addition, subtraction, multiplication, division
const addition = 3 + 4;
const subtraction = 6 - 3;
const multiplication = 4 * 7;
const division = 16 / 2;

// 2. Modulo and exponentiation.
const modulo = 15 % 8; // Returns the remainder of a division between two numbers.
const exponentiation = 2 ** 3;
console.log(modulo, " and ", exponentiation); // 7 and 8

// PRECISION DILEMMAS
const result = 0.1 + 0.2;
console.log(result); // 0.30000000000000004
// round a number
console.log(result.toFixed(1)); // 0.3
// validate type data and data value
console.log(result === 0.3); // false

// ADVANCE OPERATIONS
const squareRoot = Math.sqrt(16);
const absoluteValue = Math.abs(-7);
const randomNumber = Math.random();
console.log(squareRoot); // 4
console.log(absoluteValue); // 7
console.log(randomNumber); // 0.19437641994987476
