// EXPRESSIONS
// They are code fragments that produce a value:

"Hello world"; // Produce "Hello world"
2 + 3; // Produce 5
6; // Produce 6

3(2 + 1); // we have 5 expressions:

3(2 + 1); //Produce 9
3; //Produce 3
2 + 1; //Produce 3
2; //Produce 2
1; //Produce 1

// STATEMENTS
// Code Fragments that generate an instruction.

const integerNumber = 1; // Statement (const integerNumber =) + expression (1)

// other examples of statements:
function sum() {}
let sum1;
const sum2 = function () {
  // code here
}; // ---> this is a function expression
