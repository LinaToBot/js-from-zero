// EXPLICIT TYPE CASTING
const string = "42";
const integer = parseInt(string);
console.log(integer); // 42
console.log(typeof integer); // number

const decimalString = "3.14";
const float = parseFloat(decimalString);
console.log(float); // 3.14
console.log(typeof float); // number

const binary = "1011";
const decimalBase = parseInt(binary, 2); // we have to indicate the varable and the base it is in
console.log(decimalBase); // 11
console.log(typeof decimalBase); // number

// IMPLICIT TYPE CASTING (COERCION)
const sum = 3 + "5"; // or "3" + 5
console.log(sum); // 35

const sumWithBoolean = "3" + true;
console.log(sumWithBoolean); // 3true

const sumWithNumber = 2 + true;
console.log(sumWithNumber); // 3

// We must take this into account because JS is weakly typed
const stringValue = "10";
const numberValue = 10;
const booleanValue = true;

// string value
console.log(stringValue + stringValue); // concatenate 1010
console.log(stringValue + numberValue); // concatenate 1010
console.log(stringValue + booleanValue); // concatenate 10true
// number value
console.log(numberValue + stringValue); // concatenate 1010
console.log(numberValue + numberValue); // sum 20
console.log(numberValue + booleanValue); // sum 11
// boolean value
console.log(booleanValue + stringValue); // concatenate true10
console.log(booleanValue + numberValue); // sum 11
console.log(booleanValue + booleanValue); // sum 2

// If there´s a string JS will concatenate, if there´s a number and/or a boolean JS will add.
